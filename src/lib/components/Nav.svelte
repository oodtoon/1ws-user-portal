<script lang="ts">
  import NavLink from "./ui/NavLink.svelte";
  import LogoIcon from "./icons/LogoIcon.svelte";

  export let user
</script>

<nav class="bg-primary text-white flex p-4 items-center justify-between">
  <div class="flex gap-4 items-center">
    <a href="/">
      <LogoIcon />
    </a>
    <NavLink href="/">General Account Info</NavLink>
    <NavLink href="/product-descriptions">Product Descriptions</NavLink>
    <NavLink href="contacts">Contacts</NavLink>
  </div>
  <div>Welcome {user}</div>
</nav>
