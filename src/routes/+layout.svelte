<script lang="ts">
	import "./layout.css";
	import "../app.css";

	let { children } = $props();

	import appletouch from "$lib/assets/apple-touch-icon.png";
	import favicon16 from "$lib/assets/favicon-16x16.png";
	import favicon32 from "$lib/assets/favicon-32x32.png";
	import manifest from "$lib/assets/site.webmanifest";
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href={appletouch} />
	<link type="image/png" sizes="32x32" rel="icon" href={favicon32} />
	<link type="image/png" sizes="16x16" rel="icon" href={favicon16} />
	<link rel="manifest" href={manifest} />
</svelte:head>
<div class="overflow-auto">
	{@render children()}
</div>
