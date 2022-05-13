<script>
  import Ship from './Ship.svelte';
	import { GET_SHIPS } from '../queries/ships.js';
  import { query } from "svelte-apollo";

  const ships = query(GET_SHIPS);
</script>

<h1>Ships:</h1>

<div class="ships-list">
  {#if $ships.loading}
  Loading...
  {:else if $ships.error}
    Error: {$ships.error.message}
  {:else}
    {#each $ships.data.ships as ship (ship.id)}
      <Ship {...ship} />
    {/each}
  {/if}
</div>

<style>
  .ships-list {
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
</style>