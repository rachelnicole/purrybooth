<!-- src/routes/+page.svelte -->
<script>
  import { getContext } from 'svelte';
  import Decorate from '$lib/components/Decorate.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Button from '$lib/Button.svelte';
  import { photoState } from '$lib/state/photoState.svelte.js';
  import * as fabric from "fabric";
  import { onMount } from 'svelte';

onMount(() => {
  let widthOnePercent = photoState.width / 100,
      heightOnePercent = photoState.height / 100,
      imageCurrentWidth = document.getElementById('my-fabric-canvas').clientWidth,
      imageCurrentPercent = imageCurrentWidth / widthOnePercent,
      imageNewHeight = heightOnePercent * imageCurrentPercent;

  canvas = new fabric.Canvas('my-fabric-canvas', {
    preserveObjectStacking: true,
    width: imageCurrentWidth,
    height: imageNewHeight,
    enableRetinaScaling: false
  });

  fabric.Image.fromURL(photoState.avatar).then((photoTaken) => {
    
  photoTaken.set({
       left: 0,  // custom X position
        top: 0,   // custom Y position
        originX: 'left',
        originY: 'top',
    scaleX: canvas.width / photoTaken.width,
    scaleY: canvas.height / photoTaken.height,
  });
  canvas.backgroundImage = photoTaken;
  canvas.renderAll();
});
  
});

  const layoutState = getContext('layout-key');

  // Set up a persistent canvas
  let canvas;
  let canvasContainer;
  let images;
  let decorations = [
"anime-mad",
  "bandaid",
  "frame-blue-rose",
  "third-eye",
  "pearrot",
  "black-circle",
  "septum-ring",
  "cold-sweat",
  "egirl-hearts",
  "eyepatch",
  "freckles-2",
  "blue-hearts",
  "frame-caution",
  "heart-doodles",
  "heart-glasses",
  "necklace",
  "pastel-rainbow-cloud",
  "pink-hearts",
  "round-glasses",
  "silver-piercing-1",
  "silver-piercing-2",
  "sparkles-2",
  "blue-doodle",
  "pink-doodle",
  "yellow-doodle",
  "green-doodle",
  "yellow-hearts",
  "gold-piercing-1",
  "gold-piercing-2",
  "gold-piercing-3",
  "heart-barette",
  "lip-bite",
  "choker-2",
  "choker",
  "angel-halo",
  "angry-eyebrows",
  "blush-2",
  "frame-cherry-blossoms",
  "bright-pink-blush",
  "cat-ears",
  "cat-whiskers",
  "anime-mouth",
  "blush",
  "frame-clemantis",
  "dark-pink-heart",
  "cherries",
  "devil",
  "freckles",
  "bobby-pins",
  "frame-eyes",
  "light-pink-heart",
  "o-eyes",
  "panda_ears",
  "frame-rainbow",
  "pink-blush",
  "pink-bow",
  "red-hearts",
  "frame-sparkles",
  "salmon-heart",
  "sparkles",
  "w-lips",
  "x-eyes"
 ]

  const clearCanvas = () => {

    canvas.discardActiveObject().renderAll();

    updateState();

  }

  const updateState = () => {
    const filteredImage = document.getElementById('my-fabric-canvas'),
      dataURL = filteredImage.toDataURL();

    photoTakenEncoded(dataURL);

    setStage("share");

  }

  const keyPress = (event) => {
    if (event.keyCode === 68) {
      //Do whatever when esc is pressed
      canvas.remove(canvas.getActiveObject());
    }
  };

  let handleDragStart = (e) => {

    [].forEach.call(images, function (img) {
      img.classList.remove('img_dragging');
    });
    e.target.classList.add('img_dragging');
  }

  let handleDragOver = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'copy';
    return false;
  }

  let handleDragEnter = (e) => {
    canvasContainer.classList.add('over');
  }

  let handleDragEnd = (e) => {
    // this/e.target is the source node.
    [].forEach.call(images, function (img) {
      img.classList.remove('img_dragging');
    });
  }

  let getFileName = (path) => {
    return path.match(/([^/]+)\.[\w\d]+$/)[1];
  }

  let handleDragLeave = (e) => {
    canvasContainer.classList.remove('over');
  }

  let handleDrop = (e) => {
    e.preventDefault();

    var img = document.querySelector('#decoration-container img.img_dragging').src;

    let imgSelect = getFileName(img);

    fabric.util.loadImage(img).then((img) => {
  var droppedImage = new fabric.Image(img, {
    left: e.layerX,
    top: e.layerY,
    width: img.width,
    height: img.height,
  });
  canvas.add(droppedImage);
  canvas.renderAll();
});

    return false;
  }

  // These two functions are equivalent, just sharing how to arrow-syntax for fun
  const decorateImage = (url) =>
  fabric.Image.fromURL(url).then((oImg) => {
    console.log(url);
    let imageSelect = getFileName(url);

    canvas.add(oImg);
  });

    const decorateSVG = (url) =>
    fabric.loadSVGFromURL(url, (objects, options) => {
      let imageSelect = getFileName(url);

      var obj = fabric.util.groupSVGElements(objects, options);
      canvas.add(obj).renderAll();
      
    }
    );

  $effect(() => {
      layoutState.sidebar = sidebar;
      layoutState.title = 'Upload';
      
  })
</script>

{#snippet sidebar()}
  <Sidebar />
   <p>Let's decorate! Click or drag stickers to add to canvas & scroll down for more. Once sticker is on the photo you can click on it to resize, rotate, and drag it around to place it where you'd like. To remove a sticker or change the order it shows in, make sure it's highlighted and select any of the following: </p>
          <img
            src="images/buttons/remove.png"
            alt="remove"
            class="toolbar remove"
            onclick={() => {
              canvas.remove(canvas.getActiveObject());
            }}
          >

          <img
            src="images/buttons/move-to-top.png"
            alt="move-to-top"
            class="toolbar z-index"
            onclick={() => {
              canvas.bringToFront(canvas.getActiveObject());
            }}
          >
          <img
            src="images/buttons/send-to-back.png"
            alt="send to back"
            class="toolbar z-index"
            onclick={() => {
              canvas.sendToBack(canvas.getActiveObject());
            }}
          >
          <div id="decoration-container">

              {#each decorations as item}
                    <img class="decoration" src="images/{item}.png" alt={item.replace(/-/g, ' ')} draggable={true} onclick={e => decorateImage(e.target.src)}>
                {/each}

          </div>
          <p> there's more stickers and frames, scroll in the div above :)</p>

          <button
            type="button"
            class="btn"
            onClick={() => {
              clearCanvas()
            }}>
            Lets Share »
          </button>

  {/snippet}


<Decorate />

