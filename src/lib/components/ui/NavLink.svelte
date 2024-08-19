<script lang="ts">
  export let href: string

  let className = ""
  export { className as class}
</script>

<a {href} class="{className} font-bold cursor-pointer hover:text-tertiary">
  <slot />
</a>