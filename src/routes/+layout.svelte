<script>
  import { datadogRum } from '@datadog/browser-rum';
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/app.scss';
	import Modal from "$lib/components/Modal.svelte"
  import Button from '$lib/Button.svelte';
	import { onMount, setContext } from 'svelte';
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { photoState } from '$lib/state/photoState.svelte';

    // Create a reactive state object
	let layoutState = $state({ title: 'landing' });
  let currentFilter = $state({ selected: null });
	
	// Expose it to all child components
	setContext('layout-key', layoutState);
  setContext('filter', currentFilter);

	/** @type {import('./$types').LayoutProps} */
	let { data, children } = $props();

  $effect(() => {
    // if (page.route.id !== '/' && !photoState.avatar) {
    //     goto('/mode');
    // }
});

	 let showAboutModal = $state(false);
  let showCreditModal = $state(false);
  let showHelpModal = $state(false);

	// Pass a function referencing our state
	// to the context for child components to access
	setContext('user', () => data.user);

  onMount(() => {
     datadogRum.init({
    applicationId: 'ea4da33d-6f50-4f68-b1ea-0be01d934147',
    clientToken: 'pubfabcd32628d45ab27fcbfb1f0c2e52f2',
    site: 'datadoghq.com',
    service: 'purrybooth',
    env: 'prod',				// e.g. 'prod', 'staging-1', 'dev'
    version: '2.0',	// e.g. '1.0.0'
    sessionSampleRate: 100,			// capture 100% of sessions
    sessionReplaySampleRate: 20,	// capture 20% of sessions with replay
    trackResources: true,			// Enable Resource tracking
    trackUserInteractions: true,	// Enable Action tracking
    trackLongTasks: true,			// Enable Long Tasks tracking
});
  });

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>



<div class="{layoutState.title}-page wrapper">
    <div class="main-container">
      <div class="title">
        <div class="pull-right">
        </div>
        <h1><div class="icon-my-computer"></div>{layoutState.title}　プリクラ</h1>
      </div>
      <ul class="toolbar">

		<li onclick={() => (showModal = true)}><u>A</u>bout</li>
		<Modal bind:showAboutModal>
      <p>PurryBooth was made by me, <a rel="noopener noreferrer"  href="http://www.twitter.com/ohhoe" target="_blank">Rachel White</a>. I'm a creative technologist and currently a Technical Evangelist at Datadog. You can find more of my work here: <a rel="noopener noreferrer"  href="http://www.rachelisaweso.me" target="_blank">http://www.rachelisaweso.me</a> and <a rel="noopener noreferrer"  href="http://www.imcool.online" target="_blank">http://www.imcool.online</a>.</p>
		</Modal>

        <li onclick={() => (showModal = true)}><u>C</u>redit</li>
        <Modal bind:showCreditModal>
          <p>Logo by Rachelle Viola <a rel="noopener noreferrer" href="https://rachelleviola.com/" target="_blank">Rachelle Viola</a>.</p><p>Some stickers and frames illustrated by Jewels Lei <a rel="noopener noreferrer" href="http://www.instagram.com/crimebird" target="_blank">http://www.instagram.com/crimebird</a></p>
        </Modal>
        <li class="gh"><a rel="noopener noreferrer" href="https://github.com/rachelnicole/purrybooth" target="_blank"><u>G</u>itHub</a></li>
        <li onclick={() => (showModal = true)}><u>H</u>elp</li>
        <Modal bind:showHelpModal>
          If you have any questions please feel free to reach out to me on twitter at @ohhoe or via email at loveless /at/ gmail


        </Modal>
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

        {#snippet defaultSidebar()}
            
        {/snippet}
        <!-- ...inside .main-container.secondary.window .container-inner.landing-container... -->
         {@render (layoutState.sidebar ?? defaultSidebar)()}
        <p></p>

        </div>
        <div class="statusbar">
          <div class="left">^_^</div>
          <div class="right">&nbsp;</div>
        </div>
      </div>

    </div>


