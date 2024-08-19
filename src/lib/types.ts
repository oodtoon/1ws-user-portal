export type SubscriptionInfoType = {
  label: string;
  rate: string;
  renewalDate: string;
  inv: string | null;
  so: string | null;
  id: string;
};

export type ProductType = {
  label: string;
  description: string;
  subscriptionType: string;
  subsidiaries?: string[];
  id: string;
};

export type AddressType = {
  address: string;
  city: string;
  state: string;
  zipCode: string;
};

export type ContactType = {
  name: string;
  email: string;
  phone: string;
};

export type ContactFieldType = "admin" | "billing"

export type AccountInfoType = {
  name: string,
  id: string,
  gln: string,
  phone: string,
  billing: ContactType,
  admin: ContactType,
  address: AddressType,
  accountManager: ContactType
  // subscriptions: {}
}
