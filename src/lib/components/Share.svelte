<!-- src/lib/components/Filters.svelte -->
<script>
/** @type {import('./$types').PageProps} */
    import { photoState, updateAvatar } from '$lib/state/photoState.svelte.js';
    import { getContext, onMount } from 'svelte';


    let imageSource = photoState.avatar;

    let { data } = $props();




</script>

<p>Please right click and save as image, and post with the tag #PurryBooth :)</p>
        
<img src="{imageSource}">

