<script>
  import { drag } from './drag';
  import { fade } from 'svelte/transition'

  let isVisible = true;

  function handleDragStop(e) {
    if(e.detail.x > 300) {
      isVisible = false
    }
  }

</script>


{#if isVisible}
  <div 
    transition:fade
    use:drag
    class="box"
    on:dragStop={handleDragStop}
  />
{/if}

<style>
.box {
  background: var(--primary);
  box-shadow: var(--level-2);
  height: 100px;
  width: 100px;
}
</style>