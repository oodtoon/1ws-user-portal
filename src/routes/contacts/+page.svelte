<script lang="ts">
  import InfoCard from "$lib/components/InfoCard.svelte";
  import Title from "$lib/components/ui/Title.svelte";

  let contacts = [
    {
      department: "Sales",
      name: "Jeff Williams",
      email: "jeff@1worldsync.net",
      phone: "(866) 280-4013",
    },
    {
      department: "Technical Support",
      name: "Tech Support",
      email: "technicalsuppoer@1ws.atlassian.net",
      phone: "(866) 280-4013 option 2",
    },
    {
      department: "Access Management",
      name: "Access Management",
      email: "accessmanagement@1ws.atlassian.net",
    },
    {
      department: "Power Reviews Support",
      name: "Power Reviews Support",
      email: "pwr-technicalsupport@1ws.atlassian.net",
    },
    {
      department: "Billing",
      name: "Billing",
      email: "billing@1ws.atlassian.net",
      phone: "(866) 280-4013 option 1 option 3",
    },
  ];

  let outsideContacts = [
    {
      name: "GS1",
      email: "info@gs1us.org",
      phone: "(937) 435 3870",
      website: { href: "https://www.gs1.org/", label: "GS1 Website" },
    },
    {
      name: "Kroger Data Team",
      email: "ItemMDMVIP@kroger.com ",
      phone: "(844)-277-6165 ",
    },
  ];
</script>

<main class="my-6 grid gap-6 justify-items-stretch">
  <Title>Your 1WorldSync Contacts</Title>

  <InfoCard class="w-full">
    <table class="w-full">
      <thead class="font-bold">
        <td>Department:</td>
        <td>Name:</td>
        <td>Email:</td>
        <td>Phone:</td>
      </thead>
      <tbody>
        {#each contacts as contact}
          <tr>
            <td class="p-2">{contact.department}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>
              {#if contact.phone}
                {contact.phone}
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </InfoCard>

  <Title>Helpful 3rd Party Contacts</Title>

  <InfoCard class="w-full">
    <table class="w-full">
      <thead class="font-bold">
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Website</td>
      </thead>
      <tbody>
        {#each outsideContacts as contact}
          <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>
              {#if contact.website}
                <a
                  href={contact.website.href}
                  class="underline hover:text-accent-3"
                  >{contact.website.label}</a
                >
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </InfoCard>
</main>

<style>
  td,
  th {
    padding: 1em;
  }

  tr:nth-child(odd) {
    background-color: #d6e4e3;
  }

  th {
    background-color: white;
  }
</style>
