<script lang="ts">
  import Title from "$lib/components/ui/Title.svelte";
  import Header from "$lib/components/ui/Header.svelte";
  import TableHead from "$lib/components/ui/TableHead.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import InfoCard from "$lib/components/InfoCard.svelte";
  import { currentSubscriptions } from "$lib/store";
  import ContactAccountManager from "$lib/components/ContactAccountManager.svelte";
  import UpdateContactDialog from "$lib/components/UpdateContactDialog.svelte";
  import UpdateAddressDialog from "$lib/components/UpdateAddressDialog.svelte";
  import CancelDialog from "$lib/components/CancelDialog.svelte";
  import Toast from "$lib/components/Toast.svelte";
  import type {
    AccountInfoType,
    AddressType,
    ContactType,
    ContactFieldType,
    ProductType,
  } from "$lib/types";

  export let data;
  const { isToast, toastMessage } = data;

  let field: string | undefined;
  let updateTitle: string | undefined;
  let isContact = false;
  let isUpdate = false;
  let isAddressUpdate = false;
  let isCancel = false;
  let serviceToCancel: ProductType | undefined;

  let toastInt;

  let accountInfo: AccountInfoType = {
    name: "Honey Bee Hons",
    id: "1229132",
    billing: {
      name: "Bill Ing",
      email: "ap@accounting.net",
      phone: "(111) 222-3333",
    },
    admin: {
      name: "Admin Swazy",
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
  };

  function update(e: CustomEvent) {
    if (isContact) {
      isContact = false;
    }

    field = e.detail;

    switch (field) {
      case "billing":
        updateTitle = "Billing Contact";
        break;
      case "admin":
        updateTitle = "Admin Contact";
        break;
      default:
        updateTitle = "Contact";
    }

    isUpdate = true;
  }

  function handleAddress() {
    isAddressUpdate = true;
  }

  function contact(e: CustomEvent) {
    if (isUpdate) {
      isUpdate = false;
    }

    field = e.detail;
    isContact = true;
  }

  function closeUpdate() {
    resetConditionals();
  }

  function createContactUpdateMessage(title: string, contact: any) {
    const message = `${title} successfully updated to:
    <ul class="list-disc">
      <li class="mx-6">Name: ${contact.name}</li>
      <li class="mx-6">Email: ${contact.email}</li>
      <li class="mx-6">Phone: ${contact.phone}</li>
    </ul>`;
    return message;
  }

  function createAddressToastMessage(value: AddressType) {
    return `Address successfully updated to: <div class="underline">${createAddress(value)}</div> `;
  }

  function resetConditionals() {
    field = undefined;
    updateTitle = undefined;
    isContact = false;
    isUpdate = false;
    isAddressUpdate = false;
    isCancel = false;
    serviceToCancel = undefined;
  }

  function updateContact(e: CustomEvent) {
    const { name, email, phone } = e.detail;
    const contact: ContactType = { name, email, phone };
    const contactField = e.detail.field as ContactFieldType;
    accountInfo[contactField as ContactFieldType] = contact;
    $toastMessage = createContactUpdateMessage(updateTitle!, contact);
    $isToast = true;
    resetConditionals();
  }

  function createAddress(address: AddressType) {
    const addressString =
      address.address +
      " " +
      address.city +
      " " +
      address.state +
      "," +
      " " +
      address.zipCode;
    return addressString;
  }

  function updateAddress(e: CustomEvent) {
    accountInfo.address = e.detail;
    isAddressUpdate = false;
    $isToast = true;
    $toastMessage = createAddressToastMessage(e.detail);
    resetConditionals();
  }

  function closeToast() {
    clearTimeout(toastInt);
    $isToast = false;
    $toastMessage = null;
  }

  function handleCancel(e: CustomEvent) {
    isCancel = true;
    serviceToCancel = $currentSubscriptions.find((sub) => sub.id === e.detail);
  }

  function confirmCancel() {
    $currentSubscriptions = $currentSubscriptions.filter(
      (sub) => sub.id !== serviceToCancel!.id
    );
    resetConditionals();
  }

  $: if ($isToast) {
    toastInt = setTimeout(() => {
      $isToast = false;
      $toastMessage = null;
    }, 5000);
  }
</script>

{#if $isToast}
  <Toast message={$toastMessage} on:closeToast={closeToast} />
{/if}

{#if isUpdate}
  <UpdateContactDialog
    {field}
    {updateTitle}
    on:updateContact={updateContact}
    on:closeUpdate={closeUpdate}
  />
{/if}

{#if isAddressUpdate}
  <UpdateAddressDialog
    on:closeAddressUpdate={resetConditionals}
    on:updateAddress={updateAddress}
  />
{/if}

{#if isContact}
  <ContactAccountManager
    name={accountInfo.accountManager.name}
    email={accountInfo.accountManager.email}
    phone={accountInfo.accountManager.phone}
    {field}
    on:closeContact={resetConditionals}
  />
{/if}

{#if isCancel}
  <CancelDialog
    service={serviceToCancel}
    on:confirmCancel={confirmCancel}
    on:closeCancel={resetConditionals}
  />
{/if}

<main class="container m-auto grid justify-start min-h-[80dvh] gap-10 my-6">
  <Title>{accountInfo.name} Subscription Information</Title>
  <div class="flex gap-4 w-full">
    <InfoCard class="h-full w-full">
      <Header>Account Info</Header>
      <table>
        <thead>
          <TableHead>Field</TableHead>
          <TableHead>Current Info</TableHead>
          <TableHead>Edit</TableHead>
        </thead>
        <tbody>
          <tr>
            <td>Company Name:</td>
            <td>{accountInfo.name}</td>
            <td
              ><Button event="contact" value="company name" on:contact={contact}
                >Contact Account Manager</Button
              ></td
            >
          </tr>
          <tr>
            <td>Account ID:</td>
            <td>{accountInfo.id}</td>
            <td
              ><div
                class="flex bg-accent-2 p-2 rounded-md text-black justify-center"
              >
                Cannot Change
              </div></td
            >
          </tr>
          <tr>
            <td>GLN:</td>
            <td>{accountInfo.gln}</td>
            <td
              ><Button event={"contact"} value="GLN" on:contact={contact}
                >Contact Account Manager</Button
              ></td
            >
          </tr>
        </tbody>
      </table>
    </InfoCard>
    <InfoCard class="h-full self-end w-full">
      <Header>Account Contacts</Header>
      <table>
        <thead>
          <TableHead>Field</TableHead>
          <TableHead>Current Info</TableHead>
          <TableHead>Edit</TableHead>
        </thead>

        <tbody>
          <tr>
            <td>Billing Contact:</td>
            <td>
              <div>
                {accountInfo.billing.name}
              </div>
              <div>
                {accountInfo.billing.email}
              </div>
              <div>
                {accountInfo.billing.phone}
              </div>
            </td>
            <td
              ><Button value="billing" event="update" on:update={update}
                >Update Billing Contact</Button
              ></td
            >
          </tr>
          <tr>
            <td>Admin:</td>
            <td>
              <div>{accountInfo.admin.name}</div>
              <div>{accountInfo.admin.email}</div>
              <div>{accountInfo.admin.phone}</div>
            </td>
            <td
              ><Button value="admin" event="update" on:update={update}
                >Update Admin</Button
              ></td
            >
          </tr>
          <tr>
            <td>Address:</td>
            <td>{createAddress(accountInfo.address)}</td>
            <td
              ><Button value="address" event="update" on:update={handleAddress}
                >Update Address</Button
              ></td
            >
          </tr>
        </tbody>
      </table>
    </InfoCard>
  </div>

  <InfoCard class="w-full">
    <Header>Upcoming Subscription Renewals</Header>

    <table class="w-full">
      <thead>
        <TableHead>Service</TableHead>
        <TableHead>Rate</TableHead>
        <TableHead>Renewal Date</TableHead>
        <TableHead>Invoice</TableHead>
        <TableHead>Sales Order</TableHead>
        <TableHead>More Info</TableHead>
        <TableHead>Cancel</TableHead>
      </thead>
      {#if $currentSubscriptions}
        <tbody>
          {#each $currentSubscriptions as sub, i}
            <tr>
              <td>{sub.label}</td>
              <td>{sub.rate}</td>
              <td>
                {sub.renewalDate}
              </td>
              <td>
                {#if sub.inv}
                  {sub.inv}
                {:else}
                  Invoice Currently Unavailable
                {/if}
              </td>
              <td>{sub.so}</td>
              <td>
                <a
                  class=" text-black underline"
                  href="/product-descriptions#{sub.id}">What Is {sub.label}?</a
                >
              </td>
              <td>
                <Button event={"cancel"} value={sub.id} on:cancel={handleCancel}
                  >Cancel</Button
                >
              </td>
            </tr>
          {/each}
        </tbody>
      {/if}
    </table>
  </InfoCard>
</main>

<style>
  td,
  th {
    padding: 1em;
  }

  tr:nth-child(odd) {
    background-color: #d6e4e3;
  }

  th {
    background-color: white;
  }
</style>
