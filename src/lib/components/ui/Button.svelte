<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let value = "";
  export let event: string;
  export let title = ""

  let className = ""
  export { className as class}

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch(event, value);
  }
</script>

<button
  on:click={handleClick}
  {value}
  class="bg-accent-3 text-white rounded-md p-2 {className}"><slot /></button
>
