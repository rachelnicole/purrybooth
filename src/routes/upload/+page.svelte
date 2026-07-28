<script>
	/** @type {import('./$types').PageProps} */
	let { data, avatar } = $props();

    let fileinput;

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let data = image;
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = (e) => {
            avatar = e.target.result;
        };
    };
</script>

<div id="app">
    <h1>Upload Image</h1>

    {#if avatar}
        <img class="avatar" src={avatar} alt="d" />
    {:else}
        <img
            class="avatar"
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
            alt=""
        />
    {/if}
    <img
        class="upload"
        src="https://static.thenounproject.com/png/625182-200.png"
        alt=""
        onclick={() => {
            fileinput.click();
        }}
    />
    <div
        class="chan"
        onclick={() => {
            fileinput.click();
        }}
    >
        Choose Image
    </div>
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

    .upload {
        display: flex;
        height: 50px;
        width: 50px;
        cursor: pointer;
    }
    .avatar {
        max-width: 100%;
    }
</style>
