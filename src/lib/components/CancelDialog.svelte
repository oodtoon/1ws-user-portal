<script lang="ts">
  import Dialog from "./ui/Dialog.svelte";
  import Button from "./ui/Button.svelte";
  import { createEventDispatcher } from "svelte";
  import Header from "./ui/Header.svelte";
  import type { ProductType } from "$lib/types";

  export let service: ProductType | undefined;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("closeCancel");
  }

  function confirmCancel() {
    dispatch("confirmCancel", service?.id);
  }
</script>

<Dialog class="absolute -translate-x-[50dvh] -translate-y-[10dvh] top-1/2 left-1/2 items-center justify-items-center">
  <Header>Are you sure you want to cancel {service?.label}?</Header>
  <Button event="closeCancel" on:closeCancel={close}
    >Continue Using {service?.label}</Button
  >
  <button class="underline" on:click={confirmCancel}>Cancel Subscription</button>
</Dialog>
