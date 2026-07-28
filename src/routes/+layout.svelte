<script>
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/app.scss';
	import Modal from "$lib/components/Modal.svelte"
	export const ssr = false;

	let { children } = $props();
	let showModal = $state(false);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>



<div class="landing-page wrapper">
    <div class="main-container">
      <div class="title">
        <div class="pull-right">
        </div>
        <h1><div class="icon-my-computer"></div>　プリクラ</h1>
      </div>
      <ul class="toolbar">

		<li onclick={() => (showModal = true)}><u>A</u>bout</li>
		<Modal bind:showModal>
		<div class="modal wrapper">
    <div class="main-container modal">
        <div class="title">
          <h1><div class="icon-my-computer"></div>About プリクラ</h1>
        </div>
        <div class="ie-bar">
          <label htmlFor="url-second" class="label">Address:</label>
          <div class="combo">
          
          </div>
        </div>
        <div class="container-inner landing-container">
          <p>PurryBooth was made by me, <a rel="noopener noreferrer"  href="http://www.twitter.com/ohhoe" target="_blank">Rachel White</a>. I'm a creative technologist and currently a Technical Evangelist at Datadog. You can find more of my work here: <a rel="noopener noreferrer"  href="http://www.rachelisaweso.me" target="_blank">http://www.rachelisaweso.me</a> and <a rel="noopener noreferrer"  href="http://www.imcool.online" target="_blank">http://www.imcool.online</a>.</p>
          <div class="continue">
 
        </div>
        
        </div>
        <div class="statusbar">
          <div class="left">^_^</div>
          <div class="right">&nbsp;</div>
        </div>
      </div>
    </div>
		</Modal>

        <li><u>C</u>redit</li>
        <li class="gh"><a rel="noopener noreferrer" href="https://github.com/rachelnicole/purrybooth" target="_blank"><u>G</u>itHub</a></li>
        <li><u>H</u>elp</li>
      </ul>
      <div class="container-inner">
        {@render children()}
      </div>
      <div class="statusbar">
        <div class="left">made by <a rel="noopener noreferrer" href="http://www.twitter.com/ohhoe" target="_blank">ohhoe</a></div>
        <div class="right">&nbsp;</div>
      </div>
    </div>
    <div class="main-container secondary window">
        <div class="title">
          <div class="pull-right">
          </div>
          <h1><div class="icon-my-computer"></div> プリクラ</h1>
        </div>
        <div class="container-inner landing-container">
        <a href="http://www.purrybooth.com" alt="landing page"><img
              class="purrybooth-logo"
              src="images/logo.png"
              alt="purrybooth-logo"
            />
        </a>
          

        </div>
        <div class="statusbar">
          <div class="left">^_^</div>
          <div class="right">&nbsp;</div>
        </div>
      </div>
    </div>


