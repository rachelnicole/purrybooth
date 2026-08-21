<!-- src/lib/components/Upload.svelte -->
<script>
	/** @type {import('./$types').PageProps} */
	import { photoState, setAvatar } from '$lib/state/photoState.svelte.js';
    import Button from '$lib/Button.svelte'
    import { onMount } from 'svelte';

    let fileinput;

    const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
            setAvatar(e.target.result, { width: img.naturalWidth, height: img.naturalHeight });
        };
        img.src = e.target.result;
    };
};

</script>

<div id="app">

    {#if photoState.avatar}
        <img class="avatar photoPreview" src={photoState.avatar} alt="d" data-dd-privacy="hidden"/>
    {:else}
    {/if}

    <p>Max file size: 5mb, accepted: jpg|gif|png</p>
    <button
    class="btn"
    onclick={() => {
            fileinput.click();
        }}
    >Choose Image</button>

    <input
        style="display:none"
        type="file"
        accept=".jpg, .jpeg, .png"
        onchange={(e) => onFileSelected(e)}
        bind:this={fileinput}
    />
</div>

<style>
    #app {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }

    .avatar {
        max-width: 100%;
    }
</style>