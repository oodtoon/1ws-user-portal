<script lang="ts">
  export let href: string;
  export let isActive = false;

  let className = "";
  export { className as class };
</script>

<a
  {href}
  class="{className} font-bold cursor-pointer hover:text-tertiary {isActive
    ? 'text-tertiary'
    : ''}"
>
  <slot />
</a>
