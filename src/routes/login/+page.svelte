<script lang="ts">
  import vertLogo from "$lib/assets/1ws-vert-full.png";
  import { goto } from "$app/navigation";

  function handleLogin() {
    goto("/");
  }
</script>

<main class="flex bg-login-bg items-center h-svh">
  <div class="flex m-auto max-w-4xl rounded-md overflow-hidden h-[80dvh]">
    <a
      href="https://1worldsync.com/subscription-plans/"
      target="_blank"
      class="cursor-pointer"
    >
      <img
        class="h-full aspect-square"
        src="https://dam.catalog.1worldsync.com/im/img/GCP-5647731039141888"
      />
    </a>

    <div class="flex flex-col grow justify-between bg-white text-black p-2">
      <div class="m-auto">
        <img src={vertLogo} class="scale-50" />
        <h1>User Account Portal</h1>
      </div>

      <form action="" class="grid p-2 gap-2 m-auto">
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          class="border-accent-2 border-[1px] rounded-sm"
        />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          class="border-accent-2 border-[1px] rounded-sm"
        />
        <button
          on:click={handleLogin}
          type="button"
          class="flex grow justify-center bg-accent-3 text-white rounded-sm"
          >Login</button
        >
      </form>
    </div>
  </div>
</main>
