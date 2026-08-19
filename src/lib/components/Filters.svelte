<!-- src/lib/components/Filters.svelte -->
<script>
/** @type {import('./$types').PageProps} */
    import { photoState, updateAvatar } from '$lib/state/photoState.svelte.js';
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
         
        filterPhoto = async (filterName) => {
            let image = photon.open_image(canvas, ctx);
            const filteredImage = document.getElementById('canvas'),
            dataURL = filteredImage.toDataURL();

            ctx.drawImage(img, 0, 0);

            if (filterName === 'greyscale') {
                photon.grayscale(image);
            }
            else if (filterName === 'threeDee') {
                photon.offset_red(image, 30)
            } 
            else if (filterName === 'none') {
                ctx.drawImage(img, 0, 0);
            }
            else {
                photon.filter(image, filterName);
            }

            updateAvatar(dataURL);
            
            // Place the modified image back on the canvas
            photon.putImageData(canvas, ctx, image);
        }

    })

    $effect(() => {
          if (filterState.selected) filterPhoto(filterState.selected);
      });
</script>

{#if photoState.avatar}
        
<div class="decorateCanvas"><section class="content"><canvas bind:this={canvas} class="decorateCanvas" id="canvas" width="{photoState.width}" height="{photoState.height}"></canvas></section></div>
    {:else}
        please go back and upload an image
{/if}

