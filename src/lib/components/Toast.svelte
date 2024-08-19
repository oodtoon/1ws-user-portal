<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import CloseIcon from "./icons/CloseIcon.svelte";

  export let message;

  const dispatch = createEventDispatcher();

  function closeToast() {
    dispatch("closeToast");
  }
</script>

<dialog open class="grid grid-cols-6 bg-tertiary rounded-md p-2 text-black font-bold shadow-lg max-w-sm">
  <div class="col-span-5 p-1 rounded-sm">{@html message}</div>
  <button on:click={closeToast} class="justify-self-end self-center">
    <CloseIcon />
  </button>
</dialog>
