<script lang="ts">
  import Title from "$lib/components/ui/Title.svelte";

  export let data;
  const { salesOrder } = data;
</script>

<div class="h-dvh">
  <Title>Sales Order {salesOrder}</Title>
</div>
