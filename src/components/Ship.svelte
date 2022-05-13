<script>
  export let name;
  export let image;
  export let model;
  export let weight_kg;
  export let speed_kn;
  export let status;
  export let successful_landings;
  export let year_built;
</script>

<div class="ship">
  <div>
    <h3 class="name">{name}</h3>
    <ul class="specs">
      <li>model: {model || 'unknown'}</li>
      <li>weight: {weight_kg ? `${weight_kg}kg` : 'unknown'}</li>
      <li>speed: {speed_kn ? `${speed_kn}kn` : 'unknown'}</li>
      <li>status: {status || 'unknown'}</li>
      <li>successful landings: {successful_landings ||'unknown'}</li>
      <li>built in: {year_built || 'unknown'}</li>
    </ul>
  </div>
  {#if image}
    <img src={image} alt="">
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