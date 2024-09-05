<script lang="ts">
  import NavLink from "./ui/NavLink.svelte";
  import LogoIcon from "./icons/LogoIcon.svelte";
  import { page } from "$app/stores";

  export let user;
</script>

<nav class="bg-primary text-white flex p-4 items-center justify-between">
  <div class="flex gap-4 items-center">
    <a href="/">
      <LogoIcon />
    </a>
    <NavLink href="/" isActive={$page.route.id === "/"}
      >General Account Info</NavLink
    >
    <NavLink
      href="/product-descriptions"
      isActive={$page.route.id === "/product-descriptions"}
      >Product Descriptions</NavLink
    >
    <NavLink href="contacts" isActive={$page.route.id === "/contacts"}
      >Contacts</NavLink
    >
  </div>
  <div>Welcome {user}</div>
</nav>
