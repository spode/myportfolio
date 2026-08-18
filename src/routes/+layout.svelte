<script lang="ts">
	import './layout.css';
	import "../app.css";

	// import favicon from "$lib/assets/favicon.svg";
	import favicon from "$lib/assets/cup.png";

	// import SnowFlakes from "$lib/components/SnowFlakes.svelte";
	// import bg from "$lib/assets/pics/alex-rashin-Tx7KO_a1ork-unsplash.jpg";
	import { onMount } from "svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="overflow-auto"><!-- <SnowFlakes/> -->{@render children()}</div>
