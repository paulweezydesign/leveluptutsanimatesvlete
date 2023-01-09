<script>
  import { scale, fly } from 'svelte/transition';
  export let toggleModal;
</script>


<div class="modal">
  <div class="card" transition:fly={{y: 40}}>
    <button on:click={toggleModal} class="drawer--close">X</button>
    <slot />
  </div>
  <div on:click={toggleModal} transition:scale={{ start: 1.5, duration: 1000 }} class="background" />
</div>

<style>
.modal {
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  align-items: center;
  justify-content: center;
}
.card {
  position: relative;
  text-align: center;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.8;
  background: linear-gradient(142deg, var(--red) 3.62%, var(--green) 100%);
}

</style>