"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import StripeIcon from "@/app/assets/NavbarIcons/StripeIcon";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "All Products",
    href: "/products",
    description: "Browse a list of all our products in one place",
  },
  {
    title: "League of Legends",
    href: "/products?category=League%20of%20legends",
    description:
      "Here, you can find various heroes and characters from the Arcane series",
  },
  {
    title: "Warcraft",
    href: "/products?category=Warcraft",
    description:
      "Choose characters from Horde, Alliance, or neutral races in this section",
  },
  {
    title: "Starcraft",
    href: "/products?category=Starcraft",
    description:
      "In this section, we reminisce about the old days of gaming with our figurines",
  },
  {
    title: "Battle Royale",
    href: "/products?category=Battle%20Royale",
    description: "Figurines from PUBG, Fortnite, Warzone, and even Apex",
  },
  {
    title: "Others",
    href: "/products?category=Others",
    description:
      "Here, you can find diverse figurines, including those from Minecraft, GTA, The Witcher, and many more",
  },
];

const NavbarLinks = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-neutral-900">
            Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/online-payments"
                  >
                    <StripeIcon className="h-24 w-24" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Online Payments
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      With Stripe, we provide you with a fast and secure payment
                      method. Click to learn more.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <Link href="/home">
                <ListItem title="Home">
                  On the homepage, discover the most important details about our
                  products and our business.
                </ListItem>
              </Link>
              <Link href="/faq">
                <ListItem title="FAQ">
                  Here, you can view the most frequently asked questions from
                  users.
                </ListItem>
              </Link>
              <Link href="/contact">
                <ListItem title="Contact">
                  If you have any questions or issues, you can contact us.
                </ListItem>
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-neutral-900">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link href={component.href} key={component.title}>
                  <ListItem title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/special" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Special
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavbarLinks;
