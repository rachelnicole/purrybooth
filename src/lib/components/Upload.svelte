<!-- src/lib/components/Upload.svelte -->
<script>
	/** @type {import('./$types').PageProps} */
	import { photoState, setAvatar } from '$lib/state/photoState.svelte.js';
    import Button from '$lib/Button.svelte'

    let fileinput;

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        let imageUploaded = document.querySelector('.photoPreview');

        let imageSize = {
            width: imageUploaded.naturalWidth,
            height: imageUploaded.naturalHeight
        }

        reader.readAsDataURL(image);
        reader.onload = (e) => {
            setAvatar(e.target.result, imageSize);
        };
        
    };



  let listenerItem = document.querySelector("statecheck");
  listenerItem.addEventListener("click", statecheck);
</script>

<div id="app">

    {#if photoState.avatar}
        <img class="avatar photoPreview" src={photoState.avatar} alt="d" />
    {:else}
        <img
            class="avatar"
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
            alt=""
        />
    {/if}
    <button
    class="btn"
    onclick={() => {
            fileinput.click();
        }}
    >Choose Images</button>

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