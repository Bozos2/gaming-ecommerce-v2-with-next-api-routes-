"use client";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string | { category?: string[] };
  link: string;
}

interface BreadcrumbsDetailProps {
  items: BreadcrumbItem[];
}

const BreadcrumbsDetail: React.FC<BreadcrumbsDetailProps> = ({ items }) => {
  return (
    <Breadcrumbs className="lg:text-3xl font-semibold">
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          <Link href={item.link}>
            {typeof item.label === "string"
              ? item.label
              : item.label.category
              ? item.label.category.join("/")
              : ""}
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsDetail;
