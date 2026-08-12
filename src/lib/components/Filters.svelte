<!-- src/lib/components/Filters.svelte -->
<script>
/** @type {import('./$types').PageProps} */
    import { photoState } from '$lib/state/photoState.svelte.js';
    import { onMount } from 'svelte';

    let imageSource = photoState.avatar;

    let canvas;



    onMount(async () => {

        canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        const img = new Image();

        img.onload = function() {
            ctx.drawImage(img, 0, 0); // Draws at coordinates (x:0, y:0)
        };

img.src = imageSource; 

    
    })
</script>

{#if photoState.avatar}
        

asdfasdfasf

<div class="decorateCanvas" bind:this={canvas}><section class="content"><canvas class="decorateCanvas" id="canvas" width="{photoState.width}" height="{photoState.height}"></canvas></section></div>
    {:else}
        please go back and upload an image
{/if}

