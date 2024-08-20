<script lang="ts">
  import Title from "$lib/components/ui/Title.svelte";
  import Header from "$lib/components/ui/Header.svelte";
  import TableHead from "$lib/components/ui/TableHead.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import InfoCard from "$lib/components/InfoCard.svelte";
  import { currentSubscriptions, accountInfo } from "$lib/store";
  import ContactAccountManager from "$lib/components/dialogs/ContactAccountManager.svelte";
  import UpdateContactDialog from "$lib/components/dialogs/UpdateContactDialog.svelte";
  import UpdateAddressDialog from "$lib/components/dialogs/UpdateAddressDialog.svelte";
  import CancelDialog from "$lib/components/dialogs/CancelDialog.svelte";
  import DenyCancelDialog from "$lib/components/dialogs/DenyCancelDialog.svelte";
  import Toast from "$lib/components/Toast.svelte";
  import type {
    AddressType,
    ContactType,
    ContactFieldType,
    SubscriptionInfoType,
  } from "$lib/types";
  import { setContext } from "svelte";

  setContext("subs", $currentSubscriptions);

  export let data;
  const { isToast, toastMessage } = data;

  let field: string | undefined;
  let updateTitle: string | undefined;
  let isContact = false;
  let isUpdate = false;
  let isAddressUpdate = false;
  let isCancel = false;
  let isDenyCancel = false;
  let serviceToCancel: SubscriptionInfoType | undefined;

  const today = new Date();
  const futureDate = new Date("9/1/2024");
  const compareDate = new Date("9/1/2024");

  console.log(compareDate.setDate(futureDate.getDate() - 30));
  console.log(today < compareDate);
  console.log(compareDate);

  let toastInt;

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
    isDenyCancel = false;
    serviceToCancel = undefined;
  }

  function updateContact(e: CustomEvent) {
    const { name, email, phone } = e.detail;
    const contact: ContactType = { name, email, phone };
    const contactField = e.detail.field as ContactFieldType;
    $accountInfo![contactField as ContactFieldType] = contact;
    $toastMessage = createContactUpdateMessage(updateTitle!, contact);
    $isToast = true;
    resetConditionals();
  }

  function createAddress(address: AddressType | undefined) {
    const addressString = address
      ? address.address +
        " " +
        address.city +
        " " +
        address.state +
        "," +
        " " +
        address.zipCode
      : "";
    return addressString;
  }

  function updateAddress(e: CustomEvent) {
    $accountInfo!.address = e.detail;
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
    serviceToCancel = $currentSubscriptions.find((sub) => sub.id === e.detail);
    if (isRenewalCancelable(serviceToCancel!.renewalDate)) {
      isCancel = true;
    } else {
      isDenyCancel = true;
    }
  }

  function confirmCancel() {
    $currentSubscriptions = $currentSubscriptions.filter(
      (sub) => sub.id !== serviceToCancel!.id
    );
    $isToast = true;
    $toastMessage = `Successfully cancelled ${serviceToCancel?.label}`;
    resetConditionals();
  }

  function isRenewalCancelable(date: string, cxlDays: number = 30) {
    const today = new Date();
    const renewalDate = new Date(date);
    const compareDate = new Date(date);
    compareDate.setDate(renewalDate.getDate() - cxlDays);

    return today < compareDate;
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

<main class="container m-auto grid justify-start min-h-[80dvh] gap-10 my-6">
  <Title>{$accountInfo?.name} Subscription Information</Title>
  <div class="flex gap-4 w-full">
    <InfoCard class="h-full w-full relative">
      {#if isContact}
        <ContactAccountManager
          name={$accountInfo?.accountManager.name}
          email={$accountInfo?.accountManager.email}
          phone={$accountInfo?.accountManager.phone}
          {field}
          on:closeContact={resetConditionals}
        />
      {/if}

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
            <td>{$accountInfo?.name}</td>
            <td
              ><Button event="contact" value="company name" on:contact={contact}
                >Contact Account Manager</Button
              ></td
            >
          </tr>
          <tr>
            <td>Account ID:</td>
            <td>{$accountInfo?.id}</td>
            <td> </td></tr
          >
          <tr>
            <td>GLN:</td>
            <td>{$accountInfo?.gln}</td>
            <td
              ><Button event={"contact"} value="GLN" on:contact={contact}
                >Contact Account Manager</Button
              ></td
            >
          </tr>
        </tbody>
      </table>
    </InfoCard>

    <InfoCard class="h-full self-end w-full relative">
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
              <div class="border-b-2 border-dashed border-primary">
                {$accountInfo?.billing.name}
              </div>
              <div class="border-b-2 border-dashed border-primary">
                {$accountInfo?.billing.email}
              </div>
              <div class="border-b-2 border-dashed border-primary">
                {$accountInfo?.billing.phone}
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
              <div class="border-b-2 border-dashed border-primary">{$accountInfo?.admin.name}</div>
              <div class="border-b-2 border-dashed border-primary">{$accountInfo?.admin.email}</div>
              <div class="border-b-2 border-dashed border-primary">{$accountInfo?.admin.phone}</div>
            </td>
            <td
              ><Button value="admin" event="update" on:update={update}
                >Update Admin</Button
              ></td
            >
          </tr>
          <tr>
            <td>Address:</td>
            <td>{createAddress($accountInfo?.address)}</td>
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

  <InfoCard class="w-full relative">
    {#if isDenyCancel}
      <DenyCancelDialog
        service={serviceToCancel}
        accountInfo={$accountInfo}
        on:closeDenyCancel={closeUpdate}
      />
    {/if}

    {#if isCancel}
      <CancelDialog
        service={serviceToCancel}
        on:confirmCancel={confirmCancel}
        on:closeCancel={resetConditionals}
      />
    {/if}

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
                  <a href="/invoice/{sub.inv}" class="underline hover:text-secondary" target="_blank"
                    >{sub.inv}</a
                  >
                {:else}
                  Invoice Currently Unavailable
                {/if}
              </td>
              <td
                ><a
                  href="/sales-order/{sub.so}"
                  class="underline hover:text-secondary"
                  target="_blank">{sub.so}</a
                ></td
              >
              <td>
                <a
                  class=" text-black underline hover:text-secondary"
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
