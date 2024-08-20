<script lang="ts">
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import  { accountInfo } from "$lib/store"


</script>

<Nav user={$accountInfo.admin.name}/>
<div class="container m-auto">
  <slot />
</div>
<Footer />
