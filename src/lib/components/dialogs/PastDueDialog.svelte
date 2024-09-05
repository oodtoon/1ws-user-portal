<script lang="ts">
  import Dialog from "../ui/Dialog.svelte";
  import Header from "../ui/Header.svelte";
  import Button from "../ui/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import type { SubscriptionInfoType } from "$lib/types";

  export let pastDueSub: SubscriptionInfoType | undefined;

  const GRACE_PERIOD_DAYS = 60;

  function getTerminationDate() {
    if (pastDueSub) {
      const renewalDate = new Date(pastDueSub.renewalDate);
      const terminationDate = new Date(pastDueSub.renewalDate);
      terminationDate.setDate(renewalDate.getDate() + GRACE_PERIOD_DAYS);
      return terminationDate.toLocaleDateString();
    }
  }

  function getDaysUntilTermination() {
    if (pastDueSub) {
      const renewalDate = new Date(pastDueSub.renewalDate);
      const terminationDate = new Date(pastDueSub.renewalDate);
      const today = new Date();
      terminationDate.setDate(renewalDate.getDate() + GRACE_PERIOD_DAYS);
      const dayDifference = Math.floor(
        (terminationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      return dayDifference;
    }
  }

  const dispatch = createEventDispatcher();

  function handleClosePastDue() {
    dispatch("closePastDue");
  }

  getDaysUntilTermination();
</script>

<Dialog class="border-red-500 bg-white text-white">
  <Header class="text-black">Payment is Past Due!</Header>
  <div class="bg-red-600 p-2 rounded shadow-lg">
    <p>
      Your invoice for your <span class="font-bold">{pastDueSub?.label}</span>
      subscription is past due. It became past due on
      <span class="font-bold">{pastDueSub?.renewalDate}</span>.
    </p>
    <br />
    <p>
      Make payment
      <a
        class="font-bold underline"
        href="/invoice/{pastDueSub?.inv}"
        target="_blank">HERE</a
      >
      or your account will be turned off after
      <span class="font-bold">
        {getTerminationDate()}.
      </span>
    </p>
    <br />
    <p>
      You have <span class="font-bold">{getDaysUntilTermination()}</span>
      {#if getDaysUntilTermination() === 1}
        day
      {:else}
        days
      {/if}
      until your account will be terminated. Losing this service could mean losing
      business with potential partners.
    </p>
  </div>
  <div class="m-auto flex items-center gap-2">
    <a
      class="text-black bg-tertiary p-2 rounded-md hover:bg-primary hover:text-white"
      href="/invoice/{pastDueSub?.inv}"
      target="_blank">Make Payment Here</a
    >
    <Button event="close" on:close={handleClosePastDue} class="bg-red-600 hover:bg-red-400">Close</Button>
  </div>
</Dialog>
