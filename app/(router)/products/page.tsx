import Link from "next/link";

import { getProducts } from "@/lib/products";

import Search from "@/app/components/UI/Serachbar";
import SidebarFilter from "@/app/components/UI/SidebarFilter";
import Breadcrumbs from "@/app/components/UI/Breadcrumbs";
import FilterButton from "@/app/components/Buttons/FilterButton";
import MobileCategory from "@/app/components/UI/MobileCategoryBar";
import ProductCard from "@/app/components/UI/ProductCard";

const Products = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 8;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const category =
    typeof searchParams.category === "string"
      ? [searchParams.category]
      : searchParams.category;
  const dimensions =
    typeof searchParams.dimensions === "string"
      ? [searchParams.dimensions]
      : searchParams.dimensions;
  const price =
    typeof searchParams.price === "string"
      ? [searchParams.price]
      : Array.isArray(searchParams.price)
      ? searchParams.price
      : undefined;

  const sort =
    typeof searchParams.sort === "string" &&
    ["najniza", "najvisa", "A-Z", "Z-A"].includes(searchParams.sort)
      ? searchParams.sort
      : undefined;

  const { products, moreProductsAvailable } = await getProducts({
    page,
    limit,
    query: search,
    dimensions: dimensions,
    category: category,
    sort: sort,
    price: price,
  });

  const breadcrumbItems = [
    { label: "Home", link: "/home" },
    { label: "Products", link: "/products" },
    {
      label: { category },
      link: `/products${
        category && category.length > 0
          ? `/?${category.map((cat) => `category=${cat}`).join("&")}`
          : ""
      }`,
    },
  ];

  return (
    <section className="flex flex-col   xl:justify-start  min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black font-poppins">
      <div className="flex xl:justify-start justify-center mt-12 xl:ml-24 xl:w-1/2">
        <div className="mb-12 xl:mb-24 ml-12 xl:ml-0">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row md:gap-24">
        <div className="xl:ml-24">
          <div className="flex flex-row justify-center items-center gap-4 xl:block xl:gap-0">
            <div className="xl:mb-10">
              <Search search={search} />
            </div>
            <div className="hidden xl:block">
              <SidebarFilter
                category={category}
                sort={sort}
                dimensions={dimensions}
              />
            </div>
            <div className="xl:hidden">
              <FilterButton />
            </div>
          </div>
          <div className="xl:hidden flex justify-center">
            <MobileCategory />
          </div>
        </div>

        <div className="flex md:flex-col flex-col-reverse w-full">
          <div className="flex w-full  gap-4 justify-center  mb-12">
            <Link
              href={{
                pathname: "/products",
                query: {
                  ...(category ? { category } : {}),
                  ...(dimensions ? { dimensions } : {}),
                  ...(sort ? { sort } : {}),
                  ...(price ? { price } : {}),
                  ...(search ? { search } : {}),
                  page: page > 1 ? page - 1 : 1,
                },
              }}
              className={`${
                page <= 1
                  ? "cursor-not-allowed bg-rose-300 rounded-lg flex justify-center items-center w-24 h-8"
                  : "rounded-lg bg-primary flex justify-center items-center w-24 h-8"
              }`}
            >
              Previous
            </Link>

            {!moreProductsAvailable && (
              <Link
                href={{
                  pathname: "/products",
                  query: {
                    ...(category ? { category } : {}),
                    ...(dimensions ? { dimensions } : {}),
                    ...(sort ? { sort } : {}),
                    ...(price ? { price } : {}),
                    ...(search ? { search } : {}),
                    page: page + 1,
                  },
                }}
                className="rounded-lg bg-primary flex justify-center items-center w-24 h-8"
              >
                Next
              </Link>
            )}
          </div>
          <div className="mt-12 md:mt-0 md:mb-12">
            <ul
              role="list"
              className="max-w-7xl flex flex-row flex-wrap justify-center 2xl:justify-start  gap-6 mb-12  mx-3"
            >
              {products?.map((data) => (
                <li key={data._id.toString()}>
                  <ProductCard
                    id={data._id.toString()}
                    src={data.img}
                    title={data.title}
                    price={data.price}
                    rating={data.rating}
                    detail={data._id.toString()}
                    dimensions={data.dimensions}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
