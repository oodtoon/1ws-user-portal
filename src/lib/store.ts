import { writable } from "svelte/store";
import type { AccountInfoType, SubscriptionInfoType } from "./types";

export const currentSubscriptions = writable<SubscriptionInfoType[]>([]);
export const accountInfo = writable<AccountInfoType | null>(null);
// export const accountInfo = writable<AccountInfoType>({})
