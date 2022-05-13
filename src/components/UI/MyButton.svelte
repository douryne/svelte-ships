<script>
  export let disabled;
</script>

<button {disabled} on:click>
  <slot></slot>
</button>

<style>
  button {
    background-color: rgb(18, 24, 38);
    border-radius: 5px;
    padding: 10px 20px;
    font-family: inherit;
    color: white;
    border: none;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
  button:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
</style>