<script>
	import { fade, blur, slide, fly } from 'svelte/transition';
	import { custom } from './custom';

	export let name;

	let isReady = false;
</script>

<!-- Fade - opacticy 0 - 1 -->
<!-- Blur - opacticy and blur -->
<!-- Fly - x and y along with opacity -->
<!-- Slide - height -->
<!-- Scale - start: scale, opactiy -->
<!-- Draw - draw svgs -->

<main>
	<button on:click={() => isReady = !isReady }>Fade</button>

	{#if isReady}
		<h1 transition:custom={{delay: 2000}} >Hello {name}!</h1>
	{/if}




</main>

<style>
	.hidden {
		opacity: 0;
		transition: 0.3s ease opacity;
	}


	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>