<script lang="ts">
    let { children } = $props();
</script>

<span
    class="dark:bg-brown-900 font-semibold bg-brown-100 py-1 px-2 text-sm rounded-full"
    >{@render children()}</span
>
