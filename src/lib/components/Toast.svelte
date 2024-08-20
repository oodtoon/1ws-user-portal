<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import CloseIcon from "./icons/CloseIcon.svelte";
  import SuccessIcon from "./icons/SuccessIcon.svelte";

  export let message;

  const dispatch = createEventDispatcher();

  function closeToast() {
    dispatch("closeToast");
  }
</script>

<dialog
  open
  class="absolute grid grid-cols-6 bg-tertiary rounded-md p-2 text-black font-bold shadow-lg max-w-sm z-10"
>
  <div class="col-span-5 flex gap-4 p-1">
    <SuccessIcon />
    <div>{@html message}</div>
  </div>

  <button on:click={closeToast} class="justify-self-end self-center">
    <CloseIcon />
  </button>
</dialog>
