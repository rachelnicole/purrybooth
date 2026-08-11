<!-- src/lib/components/Filters.svelte -->
<script>
    import { photoState } from '$lib/state/photoState.svelte.js';
</script>

{#if photoState.avatar}
        <img class="avatar" src={photoState.avatar} alt="d" />
    {:else}
        please go back and upload an image
    {/if}

