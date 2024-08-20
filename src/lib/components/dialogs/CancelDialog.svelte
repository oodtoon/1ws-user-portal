<script lang="ts">
  import Dialog from "../ui/Dialog.svelte";
  import Button from "../ui/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Header from "../ui/Header.svelte";
  import type { SubscriptionInfoType } from "$lib/types";

  export let service: SubscriptionInfoType| undefined;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("closeCancel");
  }

  function confirmCancel() {
    dispatch("confirmCancel", service?.id);
  }
</script>

<Dialog class="bg-primary text-white border-accent-3 absolute items-center justify-items-center">
  <Header class="text-white text-center ">Are you sure you want to cancel {service?.label}?</Header>
  <Button event="closeCancel" on:closeCancel={close}
    >Continue Using {service?.label}</Button
  >
  <button class="underline hover:text-tertiary" on:click={confirmCancel}>Yes, Cancel Subscription</button>
</Dialog>
