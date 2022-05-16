<script>
  import { onMount } from 'svelte';
  import { GET_SHIPS } from '../queries/ships.js';
  import { query } from "svelte-apollo";

  import MyButton from './UI/MyButton.svelte';
  import Ship from './Ship.svelte';

  let page = 1;
  const maxElemsOnPage = 5;
  let ships;
  let pagesCount = 0;
  
  onMount(() => {
    const pageLC = JSON.parse(localStorage.getItem('page'));
    if (!pageLC) return;
    page = pageLC;
  });
  
  $: {
    ships = query(GET_SHIPS, {
      variables: {
        offset: (page - 1) * maxElemsOnPage,
        limit: maxElemsOnPage
      }
    });
  }
  
  $: if (!$ships.loading) {
    pagesCount = Math.ceil($ships.data.shipsResult.result.totalCount / maxElemsOnPage);
      localStorage.setItem('page', JSON.stringify(page));
  }
</script>

<h1>Ships</h1>

<div>
  <MyButton on:click={() => page -= 1} disabled={page === 1 || $ships.loading}>Prev</MyButton>
  <MyButton on:click={() => page += 1} disabled={page === pagesCount || $ships.loading}>Next</MyButton>
</div>

<div class="ships-list">
  {#if $ships.loading}
  Loading...
  {:else if $ships.error}
    Error: {$ships.error.message}
  {:else}
    {#each $ships.data.shipsResult.data as ship (ship.id)}
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