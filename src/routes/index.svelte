<script>
    import { onMount } from "svelte";
  import auth from "../authService.js";
  import { isAuthenticated, user } from "../store.js";

  let auth0Client;
  let newTask;

  onMount(async () => {
    auth0Client = await auth.createClient();

    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
  });

  function login() {
    auth.loginWithPopup(auth0Client);
  }

  function logout() {
    auth.logout(auth0Client);
  }

  function genRandom(length = 7) {
    var chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  }
</script>


<div>
    {#if !$isAuthenticated}
        <a class="btn btn-primary btn-lg mr-auto ml-auto" href="/Home" role="button" on:click="{login}">Log In</a>
    {/if}
</div>