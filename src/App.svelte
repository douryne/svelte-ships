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

<Ships />

<style>
</style>