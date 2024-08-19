<script lang="ts">
  let className = ""
  export { className as class}
</script>

<h2 class="text-black font-bold text-2xl {className}">
  <slot />
</h2>
