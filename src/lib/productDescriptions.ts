import type { ProductType } from "./types";

export const productDescriptions = {
  albertsonsPI: {
    label: "Albertsons Product Introduction",
    description:
      "Albertsons Product Introduction (PI) enables you to share item data directly with Albertsons. Currently, Albertsons has an exclusive relationship with 1WorldSync for item data set up. This means it is a REQUIREMENT by Albertsons to have an active 1WorldSync Albertsons PI account if you are doing business with them or any of their subsidiaries.",
    subsidiaries: [
      "Albertsons",
      "Safeway",
      "Jewel Osco",
      "Vons",
      "ACME",
      "Shaws",
      "Randalls",
    ],
    subscriptionType: "Annual",
    id: "albertsonsPI",
  },
  krogerPI: {
    label: "Kroger Product Introduction",
    description:
      "Kroger Product Introduction (PI or KVIP) enables you to share item data directly with Kroger. Currently, Kroger has an exclusive relationship with 1WorldSync for item data set up. This means it is a REQUIREMENT by Kroger to have an active 1WorldSync Kroger PI account if you are doing business with them or any of their subsidiaries.",
    subsidiaries: [
      "Kroger",
      "Mariano's",
      "Harris Teeter",
      "Fred Meyer",
      "Ralphs",
      "Dillons",
    ],
    subscriptionType: "Annual",
    id: "krogerPI",
  },
  dlmPI: {
    label: "Data Loading & Maintenance PI Only",
    description:
      "Data Loading & Maintenance (DLM) is a service that automates the item entry process so you don't have to worry about it. With DLM 1WorldSync loads your item data for you. Not only that, but DLM also comes with continuous maintenance. This means 1WorldSync will also update any item data upon request as well.",
    subscriptionType: "Annual",
    id: "dlmPI",
  },
  dlmIM: {
    label: "Data Loading & Maintenance IM Only",
    description:
      "Data Loading & Maintenance (DLM) is a service that automates the item entry process so you don't have to worry about it. With DLM 1WorldSync loads your item data for you. Not only that, but DLM also comes with continuous maintenance. This means 1WorldSync will also update any item data upon request as well.",
    subscriptionType: "Annual",
    id: "dlmIM",
  },
  dlm: {
    label: "Data Loading & Maintenance",
    description:
      "Data Loading & Maintenance (DLM) is a service that automates the item entry process so you don't have to worry about it. With DLM 1WorldSync loads your item data for you. Not only that, but DLM also comes with continuous maintenance. This means 1WorldSync will also update any item data upon request as well.",
    subscriptionType: "Annual",
    id: "dlm",
  },
  itemManagement: {
    label: "Item Management",
    description: "Item Management enables your company to share accurate GDSN item data with the retail partners that accept/require it. You can publish and unlimited amount of item data to an unlimited number of recipients in our network.",
    id: "im",
  },
};

export const complimentaryProducts = [
  {
    label: "Community Platform",
    description:
      "An actively monitored forum and ticketing portal for you to gain insights on how to enter item data correctly and troubleshoot issues/errors.",
    subscriptionType: "Free",
  },
  {
    label: "User Access Management",
    description:
      "A portal for you to monitor who has access to your current 1WorldSync subscriptions. Add or remove users as you'd like. No worries about going over a threshold. You have unlimited users with your account.",
    subscriptionType: "Free",
  },
];
