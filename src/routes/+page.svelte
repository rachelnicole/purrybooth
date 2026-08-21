<!-- src/routes/+page.svelte -->
<script>
  import { getContext } from 'svelte';
  import Landing from '$lib/components/Landing.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { photoState } from '$lib/state/photoState.svelte.js';

  const layoutState = getContext('layout-key');

  $effect(() => {
      layoutState.sidebar = sidebar;
      layoutState.title = 'Landing';
  })
</script>

{#snippet sidebar()}
  <Sidebar />
  {/snippet}

<Landing />

