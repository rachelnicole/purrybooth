<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
</script>

        <p>Time to choose whether you'd like to upload one of your own photos, or use your webcam to take a new one. Either way, none of the photos are saved in any way shape or form. :)</p>
        <div class="continue">
        <a
          type="button"
          class="btn"
          href="/upload"
        >
          Upload Photo
        </a>

        <button
          type="button"
          class="btn webcamBtn"
          onClick={() => setStage("photo")}
        >
          Use Webcam
        </button>
        </div>
