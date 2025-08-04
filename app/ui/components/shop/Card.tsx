import React from "react";

import { Card, CardHeader } from "@ui5/webcomponents-react";
import type { ProductType } from "../../../utils/types";
import Image from "next/image";

const ProductCard = ({ product }: ProductType) => {
  const titleText =
    product.title.length > 15
      ? product.title.substring(0, 15) + "..."
      : product.title;
  return (
      <Card
        header={
          <CardHeader
            titleText={titleText}
            subtitleText={`$${product.price} | ${product.rating.rate} ⭐`}
            additionalText={product.category}
          />
        }
        className="w-70 h-fit flex flex-col"
      >
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-contain p-5 mx-auto select-none"
          width={200}
          height={200}
          priority
        />
      </Card>
  );
};

export { ProductCard };
