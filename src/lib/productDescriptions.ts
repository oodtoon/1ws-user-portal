import type { ProductType } from "./types";

export const productDescriptions = {
  albertsonsPI: {
    id: "albertsonsPI",
    label: "Albertsons Product Introduction",
    companyName: "Albertsons",
    subscriptionType: "Annual",
    description:
      "Albertsons Product Introduction (PI) enables you to share item data directly with Albertsons. Currently, Albertsons has an exclusive relationship with 1WorldSync for item data set up. This means it is a REQUIREMENT by Albertsons to have an active 1WorldSync Albertsons PI account if you are doing business with them or any of their subsidiaries.",
    why: "The information you provide Albertsons through the Albertsons PI portal is used for shipping, storing, and stocking purposes. Additionally, if you items are being sold online, this enables Albertsons to accurately share your item data, marketing messages, and nutritional information to online customers.",
    login: {
      label: "Product Introduction",
      link: "https://auth.1worldsync.com/u/login/identifier?state=hKFo2SA5ZjZLbDRpUTNocVRnMHJjWW5iaUdneUt0cDlva2loOKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGtxQi01VnRUMkZNaktlZ01hQ1RaWGFiX0JHSTFOQnAwo2NpZNkgc2VhMkRtU2twWHJHQzVrMTVKcHNiZDM4M1c5WFlQVU8",
    },
    subsidiaries: [
      "Albertsons",
      "Safeway",
      "Jewel Osco",
      "Vons",
      "ACME",
      "Shaws",
      "Randalls",
    ],
  },
  krogerPI: {
    id: "krogerPI",
    companyName: "Kroger",
    label: "Kroger Product Introduction",
    subscriptionType: "Annual",
    description:
      "Kroger Product Introduction (PI or KVIP) enables you to share item data directly with Kroger. Currently, Kroger has an exclusive relationship with 1WorldSync for item data set up. This means it is a REQUIREMENT by Kroger to have an active 1WorldSync Kroger PI account if you are doing business with them or any of their subsidiaries.",
    why: "The information you provide Kroger through the Kroger PI portal is used for shipping, storing, and stocking purposes. Additionally, if you items are being sold online, this enables Kroger to accurately share your item data, marketing messages, and nutritional information to online customers.",
    subsidiaries: [
      "Kroger",
      "Mariano's",
      "Harris Teeter",
      "Fred Meyer",
      "Ralphs",
      "Dillons",
    ],
    login: {
      label: "Product Introduction",
      link: "https://auth.1worldsync.com/u/login/identifier?state=hKFo2SA5ZjZLbDRpUTNocVRnMHJjWW5iaUdneUt0cDlva2loOKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGtxQi01VnRUMkZNaktlZ01hQ1RaWGFiX0JHSTFOQnAwo2NpZNkgc2VhMkRtU2twWHJHQzVrMTVKcHNiZDM4M1c5WFlQVU8",
    },
  },
  dlmPI: {
    id: "dlmPI",
    label: "Data Loading & Maintenance PI Only",
    description:
      "Data Loading & Maintenance (DLM) is a service that automates the item entry process so you don't have to worry about it. With DLM 1WorldSync loads your item data for you. Not only that, but DLM also comes with continuous maintenance. This means 1WorldSync will also update any item data upon request as well.",
    subscriptionType: "Annual",
  },
  dlmIM: {
    id: "dlmIM",
    label: "Data Loading & Maintenance IM Only",
    description:
      "Data Loading & Maintenance (DLM) is a service that automates the item entry process so you don't have to worry about it. With DLM 1WorldSync loads your item data for you. Not only that, but DLM also comes with continuous maintenance. This means 1WorldSync will also update any item data upon request as well.",
    subscriptionType: "Annual",
  },
  dlm: {
    id: "dlm",
    label: "Data Loading & Maintenance",
    description:
      "Data Loading & Maintenance (DLM) is a service that automates the item entry process so you don't have to worry about it. With DLM 1WorldSync loads your item data for you. Not only that, but DLM also comes with continuous maintenance. This means 1WorldSync will also update any item data upon request as well.",
    subscriptionType: "Annual",
  },
  itemManagement: {
    id: "im",
    label: "Item Management",
    description:
      "Item Management enables your company to share accurate GDSN item data with the retail partners that accept/require it. You can publish and unlimited amount of item data to an unlimited number of recipients in our network.",
  },
};

export const complimentaryProducts = [
  {
    label: "Community Platform",
    description:
      "An actively monitored forum and ticketing portal for you to gain insights on how to enter item data correctly and troubleshoot issues/errors.",
    subscriptionType: "Free",
    link: "https://community-routing.cs.1worldsync.com/?redirectreason=notregistered&referer=https%3A%2F%2Fcommunity.1worldsync.com%2F",
  },
  {
    label: "User Access Management",
    description:
      "A portal for you to monitor who has access to your current 1WorldSync subscriptions. Add or remove users as you'd like. No worries about going over a threshold. You have unlimited users with your account.",
    subscriptionType: "Free",
    link: "https://auth.1worldsync.com/u/login/identifier?state=hKFo2SBTbHJoLVI0UUNoRkNobVg4ZEM1aTZLb1dJeWMtTktFb6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIC0wVW5fNFpBSFpTcGY3ckVBaE1EMDk3Q2FxaFRvcUlho2NpZNkgSGVxMXhpRDFYV2M2VkpPOFNYZzZNWEMwMXVqekE0MUs",
  },
];
