<script lang="ts">
  export let href: string

  let className = ""
  export { className as class}
</script>

<a {href} class="{className} cursor-pointer hover:text-tertiary" target="_blank">
  <slot />
</a>