<script>
  import { fly } from 'svelte/transition';
  export let toggleNav;

</script>

<nav transition:fly={{ x: 1000 }}>
  <a on:click={toggleNav} href="#">Home</a>
  <a on:click={toggleNav} href="#">About</a>
  <a on:click={toggleNav} href="#">Services</a>
  <a on:click={toggleNav} href="#">Contact</a>
</nav>


<style>
nav {
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  background: var(--black);
  padding: 40px;
  box-shadow: var(--level-3);
}

a {
  display: block;
  font-size: 4em;
  color: white;
  font-weight: bold;
}

</style>