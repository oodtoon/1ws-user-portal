import { currentSubscriptions } from "$lib/store";
import { writable } from "svelte/store";

export function load() {
  const isToast = writable<boolean>(false);
  const toastMessage = writable<string | null>(null)

  currentSubscriptions.set([
    {
      label: "Albertsons PI",
      rate: "$1,055",
      renewalDate: "9/1/2024",
      inv: "INV425678",
      so: "SO667241",
      id: "albertsonsPI",
    },
    {
      label: "Kroger PI",
      rate: "$1,055",
      renewalDate: "2/1/2025",
      inv: null,
      so: "S0875431",
      id: "krogerPI",
    },
    {
      label: "Data Loading & Maintenance PI Only",
      rate: "$850",
      renewalDate: "2/1/2025",
      inv: null,
      so: "S0432151",
      id: "dlmPI",
    },
  ]);

  return { isToast, toastMessage };
}
