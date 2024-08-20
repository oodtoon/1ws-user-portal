<script lang="ts">
  import Title from "$lib/components/ui/Title.svelte";

  export let data;
  const { invoice } = data;
</script>

<div class="h-dvh">
  <Title>Invoice {invoice}</Title>
</div>
