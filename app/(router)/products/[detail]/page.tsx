import DetailCards from "@/app/components/DetailPageUI/DetailCards";
import RelevantProducts from "@/app/components/DetailPageUI/RelevantProductCards";
import DetailPage from "@/app/components/DetailPageUI/DetailPage";
import BreadcrumbsDeatil from "@/app/components/UI/Breadcrumbs";
import { RelevantData } from "@/app/types/ProductTypes";

import { getProducts } from "@/lib/products";
import { getRandomProducts } from "@/app/helpers/RandomProducts";

const breadcrumbItems = [
  { label: "Home", link: "/home" },
  { label: "Products", link: "/products" },
  { label: "Detail", link: "" },
];

const Detail = async ({ params }: { params: { detail: string } }) => {
  const { products } = await getProducts({ limit: -1 });
  const detailProduct = products?.find(
    (item: any) => item._id.toString() === params.detail
  );

  const relevantProducts =
    products
      ?.filter(
        (item: any) =>
          item.category === detailProduct?.category &&
          item._id !== detailProduct?._id
      )
      .slice(0, 5) || [];

  if (relevantProducts && relevantProducts?.length < 5) {
    const remainingProducts =
      products
        ?.filter(
          (item: any) =>
            item.category !== detailProduct?.category &&
            item._id !== detailProduct?._id
        )
        .slice(0, 5 - relevantProducts?.length) || [];

    relevantProducts?.push(...remainingProducts);
  }

  const relevantProductsFormatted: RelevantData[] = relevantProducts.map(
    (item: any) => ({
      _id: item._id.toString(),
      img: item.img,
      title: item.title,
      price: item.price,
      rating: item.rating,
    })
  );

  const otherProducts = getRandomProducts(
    products || [],
    detailProduct?.category,
    detailProduct?._id,
    5
  );

  const otherProductsFormatted: RelevantData[] = otherProducts.map(
    (item: any) => ({
      _id: item._id.toString(),
      img: item.img,
      title: item.title,
      price: item.price,
      rating: item.rating,
    })
  );

  return (
    <section className="flex flex-col items-center min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-800 via-zinc-900 to-black">
      <div className="mx-4 my-4 max-w-7xl">
        <BreadcrumbsDeatil items={breadcrumbItems} />
        <DetailPage
          id={detailProduct?._id.toString()}
          category={detailProduct?.category}
          title={detailProduct?.title}
          price={detailProduct?.price}
          rating={detailProduct?.rating}
          reviews={detailProduct?.reviews}
          dimensions={detailProduct?.detail}
          description={detailProduct?.description}
          images={detailProduct?.img}
        />
        <DetailCards />
        <RelevantProducts
          title="Relevantni Proizvodi"
          data={relevantProductsFormatted}
          ProductsLink={false}
        />

        <RelevantProducts
          title="Ostale kategorije"
          data={otherProductsFormatted}
          ProductsLink={true}
        />
      </div>
    </section>
  );
};

export default Detail;
