<!-- src/lib/components/Decorate.svelte -->
<script>
/** @type {import('./$types').PageProps} */
    import { photoState } from '$lib/state/photoState.svelte.js';
    import { getContext, onMount } from 'svelte';


    const filterState = getContext('filter');
    let imageSource = photoState.avatar;
    let canvas;
    let filterPhoto;
    let { data } = $props();



    onMount(async () => {
        const photon = await import('@silvia-odwyer/photon');
        await photon.default();

        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        const img = new Image();

        img.onload = function() {
            ctx.drawImage(img, 0, 0); // Draws at coordinates (x:0, y:0)
            const image = photon.open_image(canvas, ctx);
        };

        img.src = imageSource; 

    })

</script>

        
<div class="decorateCanvas"><section class="content"><canvas bind:this={canvas} class="decorateCanvas" id="canvas" width="{photoState.width}" height="{photoState.height}"></canvas></section></div>
