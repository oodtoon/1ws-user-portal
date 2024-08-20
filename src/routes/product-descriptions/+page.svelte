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

<main class="grid gap-8 mx-2 my-6">
  <Title
    >Current Product Subscription{#if products.length > 1}
      s
    {/if}</Title
  >

  {#each products as product}
    <section
      id={product.id}
      class="grid gap-2 bg-accent-1 p-4 rounded-xl shadow-xl border-accent-3 border-solid border-2"
    >
      <Header>{product.label}</Header>
      <div>{product.description}</div>

      {#if product.why}
        <Header>Why does {product.companyName} require this?</Header>
        <p>{product.why}</p>
      {/if}

      {#if product.subsidiaries}
        <h4 class="font-bold">{product.companyName} Subsidiaries Include:</h4>
        <ul class="list-disc">
          {#each product.subsidiaries as sub}
            <li class="mx-6">{sub}</li>
          {/each}
        </ul>
      {/if}

      {#if product.login}
        <Header>Login to {product.label} Here:</Header>
        <a href={product.login.link} target="_blank" class="underline">{product.login.label} Login</a>
      {/if}
    </section>
  {/each}

  <Title>Additional Resources Included with your Subscription</Title>
  {#each complimentaryProducts as freeProduct}
    <section
      class="grid gap-2 p-4 rounded-xl shadow-lg bg-accent-2 border-primary border-solid border-2"
    >
      <Header>{freeProduct.label}</Header>
      <p>{freeProduct.description}</p>
      <Header>Login Here:</Header>
      <a href={freeProduct.link} target="_blank" class="underline">{freeProduct.label} Login</a>
    </section>
  {/each}
</main>
