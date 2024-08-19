<script lang="ts">
  import NavLink from "./ui/NavLink.svelte";
</script>

<nav class="bg-primary text-white flex p-4 items-center justify-between">
  <div class="flex gap-4">
    <NavLink href="/">General Account Info</NavLink>
    <NavLink href="/product-descriptions">Product Descriptions</NavLink>
    <NavLink href="contacts">Contacts</NavLink>
  </div>
  <div>Welcome Brody</div>
</nav>
