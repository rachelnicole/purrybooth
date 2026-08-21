<!-- src/lib/components/Webcam.svelte -->
<script>
    import { photoState, setAvatar } from '$lib/state/photoState.svelte.js';
    import Button from '$lib/Button.svelte'
    import { onMount } from 'svelte';

const videoConstraints = {
    width: 1000,
    height: 1000,
  };

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
       context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const data = canvas.toDataURL("image/png");
        photo.setAttribute("src", data);
        setAvatar(data, { width: canvas.width, height: canvas.height });
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
      const imageUploaded = document.querySelector('.webcamBlock');

      const image = {
        width: imageUploaded.naturalWidth,
        height: imageUploaded.naturalHeight
      };
      
      video.addEventListener("canplay", () => {
         if (!streaming) {
          canvas.setAttribute("width", video.clientWidth);
          canvas.setAttribute("height", video.clientHeight);
          streaming = true;
        }
      });
      requestCamera();
      clearPhoto();
    });
</script>

<div class="webcamWrapper camera">
  <video autoplay playsinline bind:this={video} id="video" class="webcamBlock">Video stream not available.</video>
  <img bind:this={photo} id="photo" class="photoPreviewWebcam" src="" alt="The screen capture will appear in this box." />
</div>
  <button id="start-button" onclick={(e) => { e.preventDefault(); takePicture(); }}>Capture photo</button>

<canvas bind:this={canvas} id="canvas" style="display:none" aria-hidden="true"></canvas>
