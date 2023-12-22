import dynamic from "next/dynamic";

const CartProvider = dynamic(
  () => import("./context/cart-reducer").then((ctx) => ctx.default),
  {
    ssr: false,
  }
);

export function ContextCartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}
