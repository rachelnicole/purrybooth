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
        if (!canvas || !imageSource) return;
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
            ctx.drawImage(img, 0, 0);

            let image = photon.open_image(canvas, ctx);

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
            
            // Place the modified image back on the canvas
            photon.putImageData(canvas, ctx, image);

            const dataURL = document.getElementById('canvas').toDataURL("image/jpeg", 0.8);
            updateAvatar(dataURL);
        }

    })

    $effect(() => {
          if (filterState.selected && typeof filterPhoto === 'function') filterPhoto(filterState.selected);
      });
</script>

{#if photoState.avatar}
        
<div class="decorateCanvas"><section class="content"><canvas bind:this={canvas} class="decorateCanvas" id="canvas" width="{photoState.width}" height="{photoState.height}" data-dd-privacy="hidden"></canvas></section></div>
    {:else}
        please go back and upload an image
{/if}

