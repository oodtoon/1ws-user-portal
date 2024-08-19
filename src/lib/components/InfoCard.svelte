<script lang="ts">
  let className = "";
  export { className as class };
</script>

<div
  class="m-auto border-2 border-accent-2 shadow-lg rounded-md p-4 {className}"
>
  <slot />
</div>
