import React from 'react';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      loadedWasm: false,
      isLoaded: false,
      wasm: null,
      img: null,
      filter: null
    };
  }
  componentDidMount() {
    this.loadWasm();
  }

  componentDidUpdate() {
    console.log(this.props.filter)

    if (this.props.filter === 'greyscale') {
      this.greyScale()
    }
    else if (this.props.filter === 'threeDee') {
      this.threeDee()
    } 
    else if (this.props.filter === 'none') {
      this.drawOriginalImage();
    }
    else {
      this.filterPhoto(this.props.filter)
    }
  }

  drawOriginalImage = async () => {
    const img = new Image();

    img.onload = () => {
      this.img = img;
      const canvas = this.refs.canvas;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0);

    }
    img.src = this.props.photoTaken;
  }

  loadWasm = async () => {

    try {
      const photon = await import('@silvia-odwyer/photon');

      this.wasm = photon;

      this.drawOriginalImage();

    } finally {
      console.log("loaded wasm successfully");
      this.loadedWasm = true;
      console.log("this.loadedWasm is", this.loadedWasm);
    }

  }

  alterChannel = async (channel_index) => {
    const canvas1 = this.refs.canvas;
    const ctx = canvas1.getContext("2d");

    ctx.drawImage(this.img, 0, 0);

    let photon = this.wasm;

    // Convert the canvas and context to a PhotonImage
    let image = photon.open_image(canvas1, ctx);

    // Filter the image
    photon.alter_channel(image, channel_index, 50);

    // Replace the current canvas' ImageData with the new image's ImageData.
    photon.putImageData(canvas1, ctx, image);

  }

  filterPhoto = async (filterName) => {
    const canvas1 = this.refs.canvas;
    const ctx = canvas1.getContext("2d");

    ctx.drawImage(this.img, 0, 0);

    let photon = this.wasm;

    // Convert the canvas and context to a PhotonImage
    let image = photon.open_image(canvas1, ctx);

    // Filter the image
    photon.filter(image, filterName);

    // Replace the current canvas' ImageData with the new image's ImageData.
    photon.putImageData(canvas1, ctx, image);

  }

  greyScale = async () => {
    const canvas1 = this.refs.canvas;
    const ctx = canvas1.getContext("2d");

    ctx.drawImage(this.img, 0, 0);

    let photon = this.wasm;

    // Convert the canvas and context to a PhotonImage
    let image = photon.open_image(canvas1, ctx);

    // Filter the image
    photon.grayscale(image);

    // Replace the current canvas' ImageData with the new image's ImageData.
    photon.putImageData(canvas1, ctx, image);

  }

  threeDee = async () => {
    const canvas1 = this.refs.canvas;
    const ctx = canvas1.getContext("2d");

    ctx.drawImage(this.img, 0, 0);

    let photon = this.wasm;

    // Convert the canvas and context to a PhotonImage
    let image = photon.open_image(canvas1, ctx);

    // Filter the image
    photon.offset_red(image, 30)

    // Replace the current canvas' ImageData with the new image's ImageData.
    photon.putImageData(canvas1, ctx, image);
    console.log(image);

  }

  effectPipeline = async () => {
    const canvas1 = this.refs.canvas;
    const ctx = canvas1.getContext("2d");

    ctx.drawImage(this.img, 0, 0);

    let photon = this.wasm;
    let phtimg = photon.open_image(canvas1, ctx);

    console.time("PHOTON_WITH_RAWPIX");
    photon.alter_channel(phtimg, 2, 70);
    photon.grayscale(phtimg);
    console.timeEnd("PHOTON_WITH_RAWPIX");

    // // Replace the current canvas' ImageData with the new image's ImageData.
    photon.putImageData(canvas1, ctx, phtimg);



    console.time("PHOTON_CONSTR");
    // photon.canvas_wasm_only(canvas1, ctx);
    console.timeEnd("PHOTON_CONSTR");
  }

  render() {
    return (
      <div className="decorateCanvas">
        <section className="content">
          <canvas ref="canvas" className="decorateCanvas" id="canvas"/>
        </section>
      </div>
    )
  }
}

export default Canvas