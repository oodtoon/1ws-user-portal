<script lang="ts">
  import Dialog from "../ui/Dialog.svelte";
  import Button from "../ui/Button.svelte";
  import type { SubscriptionInfoType, AccountInfoType } from "$lib/types";
  import { createEventDispatcher } from "svelte";
  import Header from "../ui/Header.svelte";

  export let service: SubscriptionInfoType | undefined;
  export let accountInfo: AccountInfoType | null;

  const dispatch = createEventDispatcher();

  function handleClose() {
    dispatch("closeDenyCancel");
  }
</script>

<Dialog>
  <Header class="bg-tertiary p-2 rounded text-center">Cancellation Period Missed</Header>
  <p>
    Unable to Cancel <strong>
      {service?.label}
    </strong>
    as required written cancellation notice of
    <strong>{service?.cxlDays} days </strong>prior to your renewal was not given
    as per your agreement Terms and Conditions.
  </p>
  <p>Please contact your account manager with additional questions:</p>
  <div class="mx-4 bg-accent-1 rounded shadow-md p-2">
    <div><strong>Name:</strong> {accountInfo?.accountManager.name}</div>
    <div><strong>Email:</strong> {accountInfo?.accountManager.email}</div>
    <div><strong>Phone:</strong> {accountInfo?.accountManager.phone}</div>
  </div>
  <Button event="closeDenyCancel" on:closeDenyCancel={handleClose}>Close</Button
  >
</Dialog>
