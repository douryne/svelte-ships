<script>
	import { GET_SHIPS } from '../queries/ships.js';
  import { query } from "svelte-apollo";

  const ships = query(GET_SHIPS);
</script>

<h1>Ships:</h1>

{#if $ships.loading}
  Loading...
{:else if $ships.error}
  Error: {$ships.error.message}
{:else}
  {#each $ships.data.ships as ship, idx (ship.id)}
    <h3>{idx + 1}: {ship.name}</h3>
  {/each}
{/if}