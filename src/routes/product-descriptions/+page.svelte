<script lang="ts">
  import { currentSubscriptions } from "$lib/store";
  import {
    productDescriptions,
    complimentaryProducts,
  } from "$lib/productDescriptions";
  import type { ProductType } from "$lib/types";
  import Title from "$lib/components/ui/Title.svelte";
  import Header from "$lib/components/ui/Header.svelte";

  let products: ProductType[] = [];

  $currentSubscriptions.forEach((sub) => {
    products.push(
      productDescriptions[sub.id as keyof typeof productDescriptions]
    );
  });
</script>

<main class="grid gap-4 m-2">
  <Title>Current Product Subscription(s)</Title>

  {#each products as product}
    <section id={product.id}>
      <Header>{product.label}</Header>
      <div>{product.description}</div>
    </section>
  {/each}

  <Title>Complimentary Services</Title>
  {#each complimentaryProducts as freeProduct}
    <section>
      <Header>{freeProduct.label}</Header>
      <div>{freeProduct.description}</div>
    </section>
  {/each}
</main>
