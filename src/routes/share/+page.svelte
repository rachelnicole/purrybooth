<!-- src/routes/+page.svelte -->
<script>
  import { getContext } from 'svelte';
  import Share from '$lib/components/Share.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { photoState } from '$lib/state/photoState.svelte.js';

  const layoutState = getContext('layout-key'),
        filterState = getContext('filter');


  $effect(() => {
      layoutState.sidebar = sidebar;
      layoutState.title = 'share';

  })
</script>

{#snippet sidebar()}
  <Sidebar />
 
  {/snippet}

<Share />

