<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import Header from "../ui/Header.svelte";
  import Dialog from "../ui/Dialog.svelte";
  import Button from "../ui/Button.svelte";

  const dispatch = createEventDispatcher();

  const newAddress = {
    address: "",
    city: "",
    state: "",
    zipCode: "",
  };

  function closeAddressUpdate() {
    dispatch("closeAddressUpdate");
  }

  function updateAddress() {
    dispatch("updateAddress", newAddress);
  }
</script>

<Dialog class="border-primary">
  <Header>Enter in new address:</Header>
  <form class="grid gap-2 grid-cols-3">
    <label for="address" class=""> Street Address: </label>
    <input
      id="address"
      name="address"
      type="text"
      class="col-span-2 bg-accent-1 rounded py-1 px-2"
      bind:value={newAddress.address}
    />
    <label for="city" class=""> City: </label>
    <input
      id="city"
      name="city"
      type="text"
      class="col-span-2 bg-accent-1 rounded py-1 px-2"
      bind:value={newAddress.city}
    />
    <label for="state" class=""> State: </label>
    <input
      id="state"
      name="state"
      type="text"
      class="col-span-2 bg-accent-1 rounded py-1 px-2"
      bind:value={newAddress.state}
    />
    <label for="zipCode" class=""> Zip Code: </label>
    <input
      id="zipCode"
      name="zipCode"
      type="text"
      class="col-span-2 bg-accent-1 rounded py-1 px-2"
      bind:value={newAddress.zipCode}
    />

    <button on:click={closeAddressUpdate} class="underline justify-self-start"
      >Cancel</button
    >
    <Button event="updateAddress" on:updateAddress={updateAddress}
      >Update Address</Button
    >
  </form>
</Dialog>
