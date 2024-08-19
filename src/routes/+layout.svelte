<script lang="ts">
  import "../app.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>



<Nav />
<div class="container m-auto">
  <slot />
</div>
<Footer />
