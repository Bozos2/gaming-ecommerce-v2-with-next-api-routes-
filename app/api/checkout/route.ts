import { NextResponse, NextRequest } from "next/server";
import { CartItem } from "../../types/ContextTypes";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
  // @ts-ignore
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const reqBody = await request.json();
    const { items, email } = await reqBody;

    const extractingItems = await items.map((item: CartItem) => ({
      quantity: item.amount,
      price_data: {
        currency: "eur",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          images: [item.src],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
      metadata: {
        email,
      },
    });

    return NextResponse.json({
      message: "Connection is Active!",
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
