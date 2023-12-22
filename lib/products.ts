import { Collection, Db, Document, MongoClient } from "mongodb";
import clientPromise from "@/lib/client";

let client: MongoClient;
let db: Db;
let products: Collection<Document>;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db("gamignecommerce");
    products = db.collection("figures");
  } catch (error) {
    throw new Error("Failed to connect to the database.");
  }
}

(async () => {
  await init();
})();

export const getProducts = async ({
  query,
  page = 1,
  limit = 8,
  category,
  dimensions,
  price,
  sort,
}: {
  query?: string;
  page?: number;
  limit?: number;
  category?: string[];
  dimensions?: string[];
  price?: string[];
  sort?: string;
}) => {
  try {
    if (!products) await init();

    const skip = (page - 1) * limit;

    const pipeline: PipelineStage[] = [{ $skip: skip }];

    if (limit !== -1) {
      pipeline.push({ $limit: limit });
    }

    if (query) {
      pipeline.unshift({
        $search: {
          index: "default",
          text: {
            query,
            fuzzy: {
              maxEdits: 1,
              prefixLength: 3,
              maxExpansions: 50,
            },
            path: {
              wildcard: "*",
            },
          },
        },
      });
    }

    if (category && category.length > 0) {
      pipeline.unshift({
        $match: { category: { $in: category } },
      });
    }

    if (dimensions && dimensions.length > 0) {
      pipeline.unshift({
        $match: { dimensions: { $in: dimensions } },
      });
    }

    if (price && price.length === 2) {
      const minPrice = parseFloat(price[0]);
      const maxPrice = parseFloat(price[1]);

      pipeline.unshift({
        $match: {
          price: {
            $gte: minPrice,
            $lte: maxPrice,
          },
        },
      });
    }

    if (sort) {
      if (sort === "najniza") {
        pipeline.push({ $sort: { price: 1 } });
      } else if (sort === "najvisa") {
        pipeline.push({ $sort: { price: -1 } });
      } else if (sort === "A-Z") {
        pipeline.push({ $sort: { title: 1 } });
      } else if (sort === "Z-A") {
        pipeline.push({ $sort: { title: -1 } });
      }
    }

    const result = await products.aggregate(pipeline).toArray();

    const moreProductsAvailable = result.length < limit;

    return { products: result, moreProductsAvailable };
  } catch (error) {
    return { error };
  }
};

type PipelineStage =
  | {
      $search: {
        index: string;
        text: {
          query: string;
          fuzzy: {};
          path: {
            wildcard: string;
          };
        };
      };
    }
  | {
      $skip: number;
    }
  | {
      $limit: number;
    }
  | {
      $match: {
        category: { $in: string[] };
      };
    }
  | {
      $match: {
        dimensions: { $in: string[] };
      };
    }
  | {
      $match: {
        price: {
          $gte: number;
          $lte: number;
        };
      };
    }
  | {
      $sort: {
        [key: string]: 1 | -1;
      };
    };
