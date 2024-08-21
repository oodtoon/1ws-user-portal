<script lang="ts">
  import Dialog from "../ui/Dialog.svelte";
  import Button from "../ui/Button.svelte";
  import Header from "../ui/Header.svelte";
  import QuestionIcon from "../icons/QuestionIcon.svelte";
  import { createEventDispatcher } from "svelte";
  import type { SubscriptionInfoType } from "$lib/types";
  import { productDescriptions } from "$lib/productDescriptions";

  export let service: SubscriptionInfoType| undefined;

  $: description = productDescriptions[service?.id as keyof typeof productDescriptions] 

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("closeCancel");
  }

  function confirmCancel() {
    dispatch("confirmCancel", service?.id);
  }
</script>

<Dialog class="bg-primary text-white border-accent-3 absolute items-center justify-items-center">
  <Header class="text-white text-center grid grid-cols-5 gap-4"><span class="col-span-4">Are you sure you want to cancel {service?.label}? </span><QuestionIcon/></Header>
  <p class="bg-secondary p-2 rounded text-white">{description.description}</p>
  <Button event="closeCancel" on:closeCancel={close}
    >Continue Using {service?.label}</Button
  >
  <button class="underline hover:text-tertiary" on:click={confirmCancel}>Yes, Cancel Subscription</button>
</Dialog>
