<script>
  export let specs;
</script>

<div class="ship">
  <div>
    <h3 class="name">{specs?.name}</h3>
    <ul class="specs">
      <li>model: {specs?.model || 'unknown'}</li>
      <li>weight: {specs?.weight_kg ? `${specs?.weight_kg}kg` : 'unknown'}</li>
      <li>speed: {specs?.speed_kn ? `${specs?.speed_kn}kn` : 'unknown'}</li>
      <li>status: {specs?.status || 'unknown'}</li>
      <li>successful landings: {specs?.uccessful_landings ||'unknown'}</li>
      <li>built in: {specs?.year_built || 'unknown'}</li>
    </ul>
  </div>
  {#if specs?.image}
    <img src={specs?.image} alt="">
  {:else}
    doesnt have image
  {/if}
</div>

<style>
  .ship {
    background-color: rgb(18, 24, 38);
    border-radius: 5px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px
  }

  .name {
    font-size: clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem);
  }

  .specs {
    padding: 0;
    list-style: none;
    font-size: clamp(0.875rem, 0.85rem + 0.125vw, 1rem);
    line-height: 2em;
  }

  .ship img {
    width: 50%;
  }

  @media screen and (max-width: 500px) {
    .ship {
      flex-direction: column;
      align-items: flex-start;
    }

    .ship img {
    width: 100%;
  }
  }
</style>