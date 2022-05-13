<script>
  import { onMount } from 'svelte';
  import { GET_SHIPS } from '../queries/ships.js';
  import { query } from "svelte-apollo";

  import MyButton from './UI/MyButton.svelte';
  import Ship from './Ship.svelte';

  const ships = query(GET_SHIPS);
  let page = 1;
  let paginatedShips = [];
  const maxElemsOnPage = 5;

  onMount(() => {
    const pageLC = JSON.parse(localStorage.getItem('page'));
    if (!pageLC) return;
    page = pageLC;
  });

  $: pagesCount = Math.ceil($ships?.data?.ships.length / maxElemsOnPage);
  $: if (!$ships.loading) {
    paginatedShips = [...$ships.data.ships].slice((page - 1) * maxElemsOnPage, page * maxElemsOnPage);
    localStorage.setItem('page', JSON.stringify(page));
  }
</script>

<h1>Ships</h1>

<div>
  <MyButton on:click={() => page -= 1} disabled={page === 1 || !pagesCount}>Prev</MyButton>
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