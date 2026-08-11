<!-- src/routes/+page.svelte -->
<script>
  import { getContext } from 'svelte';
  import Landing from '$lib/components/Landing.svelte';
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
  {#if photoState.avatar}
    <img class="sidebar-preview" src={photoState.avatar} alt="preview" />
  {/if}
  {/snippet}

<Landing />

