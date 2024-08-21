<script lang="ts">
  import Dialog from "$lib/components/ui/Dialog.svelte";
  import Button from "$lib/components/ui/Button.svelte";
  import { createEventDispatcher } from "svelte";

  export let name;
  export let email;
  export let phone;
  export let field;

  const dispatch = createEventDispatcher();

  function closeContact() {
    dispatch("closeContact");
  }
</script>

<Dialog class="">
  <p>
    To update your <strong>{field}</strong> you will need to contact your account
    manager:
  </p>
  <div class="mx-4 bg-accent-1 rounded shadow-md p-2">
    <div><strong>Name:</strong> {name}</div>
    <div><strong>Email:</strong> {email}</div>
    <div><strong>Phone:</strong> {phone}</div>
  </div>
  <Button
    event="closeContact"
    on:closeContact={closeContact}
    class="place-self-stretch">Close</Button
  >
</Dialog>
