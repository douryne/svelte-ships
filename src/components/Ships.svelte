<script>
	import MyButton from './UI/MyButton.svelte';
  import Ship from './Ship.svelte';
	import { GET_SHIPS } from '../queries/ships.js';
  import { query } from "svelte-apollo";

  const ships = query(GET_SHIPS);
  let page = 1;
  let paginatedShips = [];
  const maxElemsOnPage = 5;
  $: pagesCount = Math.ceil($ships?.data?.ships.length / maxElemsOnPage);
  $: {
    if (!$ships.loading) {
      paginatedShips = [...$ships.data.ships].slice((page - 1) * maxElemsOnPage, page * maxElemsOnPage);
    }
  }
</script>

<h1>Ships</h1>

<div>
  <MyButton on:click={() => page -= 1} disabled={page === 1}>Prev</MyButton>
  <MyButton on:click={() => page += 1} disabled={page === pagesCount || !pagesCount}>Next</MyButton>
</div>

<div class="ships-list">
  {#if $ships.loading}
  Loading...
  {:else if $ships.error}
    Error: {$ships.error.message}
  {:else}
    {#each paginatedShips as ship (ship.id)}
      <Ship specs={ship} />
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