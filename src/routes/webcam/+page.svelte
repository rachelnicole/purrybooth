<!-- src/routes/+page.svelte -->
<script>
  import { getContext, onMount} from 'svelte';
  import Webcam from '$lib/components/Webcam.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Button from '$lib/Button.svelte';
  import { photoState } from '$lib/state/photoState.svelte.js';

  const layoutState = getContext('layout-key');

  $effect(() => {
      layoutState.sidebar = sidebar;
      layoutState.title = 'photo';
  })
</script>

{#snippet sidebar()}
  <Sidebar />
  <p>Take a photo with your webcam to get started.</p>
{/snippet}

<Webcam />

