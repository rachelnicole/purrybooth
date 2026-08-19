<!-- src/lib/components/Webcam.svelte -->
<script>
    import { photoState, setAvatar } from '$lib/state/photoState.svelte.js';
    import Button from '$lib/Button.svelte'
    import { onMount } from 'svelte';

    const width = 320;
    let height = 0;
    let streaming = false;

    let video, canvas, photo;

    function clearPhoto() {
      const context = canvas.getContext("2d");
      context.fillStyle = "#aaaaaa";
      context.fillRect(0, 0, canvas.width, canvas.height);

      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);
    }

    function takePicture() {
      const context = canvas.getContext("2d");
      if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL("image/png");
        photo.setAttribute("src", data);
        setAvatar(data, { width: canvas.width, height: canvas.height });
      } else {
        clearPhoto();
      }
    }

    function requestCamera() {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error(`An error occurred: ${err}`);
        });
    }

    onMount(() => {
      video.addEventListener("canplay", () => {
        if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      });

      clearPhoto();
    });
</script>

<div class="camera">
  <video bind:this={video} id="video">Video stream not available.</video>
  <button id="permissions-button" onclick={requestCamera}>Allow camera</button>
  <button id="start-button" onclick={(e) => { e.preventDefault(); takePicture(); }}>Capture photo</button>
</div>

<canvas bind:this={canvas} id="canvas"></canvas>
<div class="output">
  <img bind:this={photo} id="photo" src="" alt="The screen capture will appear in this box." />
</div>