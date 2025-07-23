"use client";
import { Icon } from "@ui5/webcomponents-react";
import Link from "next/link";

import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons/dist/call.js";
import "@ui5/webcomponents-icons/dist/email.js";
import "@ui5/webcomponents-icons/dist/map.js";

type InfoProps = {
  label: string;
  icon: "call" | "email" | "map";
};

const Info = ({ label, icon }: InfoProps) => {
  let href = "";
  if (icon === "call") {
    href = "tel:" + label;
  } else if (icon === "email") {
    href = "mailto:" + label;
  } else {
    href = "https://www.google.com/maps";
  }

  return (
    <Link
      href={href}
      target="_blank"
      className="
            flex
            items-center
            gap-0.5
          "
    >
      <Icon name={icon} />
      <span className="text-sm text-[#353535] font-light">{label}</span>
    </Link>
  );
};

export { Info };
