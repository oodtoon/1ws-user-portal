import { currentSubscriptions, accountInfo } from "$lib/store";
import { writable } from "svelte/store";

export function load() {
  const isToast = writable<boolean>(false);
  const toastMessage = writable<string | null>(null);

  currentSubscriptions.set([
    {
      label: "Albertsons PI",
      rate: "$1,055",
      renewalDate: "9/1/2024",
      inv: "INV425678",
      so: "SO667241",
      id: "albertsonsPI",
      cxlDays: 30,
    },
    {
      label: "Kroger PI",
      rate: "$1,055",
      renewalDate: "2/1/2025",
      inv: null,
      so: "S0875431",
      id: "krogerPI",
      cxlDays: 60,
    },
    {
      label: "Data Loading & Maintenance PI Only",
      rate: "$850",
      renewalDate: "2/1/2025",
      inv: null,
      so: "S0432151",
      id: "dlmPI",
      cxlDays: 30,
    },
  ]);

  accountInfo.set({
    name: "Honey Bee Hons",
    id: "1229132",
    billing: {
      name: "Bill Ing",
      email: "ap@accounting.net",
      phone: "(111) 222-3333",
    },
    admin: {
      name: "Admin Swazye",
      email: "admin@gdsn.co",
      phone: "(301) 867 5309",
    },
    gln: "3145210000125",
    phone: "(123) 456-7890",
    address: {
      address: "300 S Riverside Plz",
      city: "Chicago",
      state: "IL",
      zipCode: "60603",
    },
    accountManager: {
      name: "Jeff Williams",
      email: "jeff@williams.net",
      phone: "(866) 280-4013",
    },
  });

  return { isToast, toastMessage };
}
