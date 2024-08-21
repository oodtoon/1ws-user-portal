<script lang="ts">
  let className = "";
  export { className as class };
</script>

<dialog open class="grid gap-2 border-2 border-solid px-4 py-2 rounded-md shadow-lg max-w-sm {className}">
  <slot />
</dialog>
