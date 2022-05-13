<script>
  import Ships from './components/Ships.svelte';
  import { ApolloClient, InMemoryCache } from "@apollo/client";
  import { setClient } from "svelte-apollo";

  const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache()
  });
  setClient(client);
</script>

<div class="app">
  <Ships />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>