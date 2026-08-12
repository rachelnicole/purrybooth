<!-- src/routes/+page.svelte -->
<!-- src/routes/+page.svelte -->
<script>
  import { getContext } from 'svelte';
  import Mode from '$lib/components/Mode.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { photoState } from '$lib/state/photoState.svelte.js';

  const layoutState = getContext('layout-key');

  $effect(() => {
      layoutState.sidebar = sidebar;
      layoutState.title = 'Upload';
  })
</script>

{#snippet sidebar()}
  <Sidebar />
  {/snippet}

<Mode />

