<script lang="ts">
  import Dialog from "../ui/Dialog.svelte";
  import Button from "../ui/Button.svelte";
  import Header from "../ui/Header.svelte";
  import { createEventDispatcher } from "svelte";

  export let field: string | undefined;
  export let updateTitle: string | undefined;
  let name: string;
  let email: string;
  let phone: string;

  const dispatch = createEventDispatcher();

  function updateContact(e: CustomEvent) {
    const contact = { name, email, phone };
    const message = {
      field,
      ...contact,
    };
    dispatch("updateContact", message);
  }

  function closeUpdate() {
    dispatch("closeUpdate");
  }
</script>

<Dialog class="border-primary items-center justify-items-center">
  <Header>Update {updateTitle}</Header>
  <form class="grid grid-cols-3 gap-2 justify-items-center">
    <label for="name"> Name: </label>
    <input
      id="name"
      type="text"
      class="col-span-2 bg-accent-1 rounded py-1 px-2"
      bind:value={name}
    />
    <label for="email"> Email: </label>
    <input
      id="email"
      type="email"
      class="col-span-2 bg-accent-1 rounded py-1 px-2"
      bind:value={email}
    />
    <label for="phone"> Phone: </label>
    <input
      id="phone"
      type="text"
      class="col-span-2 bg-accent-1 rounded py-1 px-2"
      bind:value={phone}
    />


      <button on:click={closeUpdate} class="underline place-self-center">Cancel</button>
      <Button
        event="updateContact"
        class="col-span-2"
        value={field}
        on:updateContact={updateContact}>Update {updateTitle}</Button
      >
 
  </form>
</Dialog>
