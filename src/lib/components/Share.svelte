<!-- src/lib/components/Filters.svelte -->
<script>
/** @type {import('./$types').PageProps} */
    import { photoState, updateAvatar } from '$lib/state/photoState.svelte.js';
    import { getContext, onMount } from 'svelte';


    let imageSource = photoState.avatar;

    let { data } = $props();




</script>
        
<img src="{imageSource}">

