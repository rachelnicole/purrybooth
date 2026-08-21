<!-- src/routes/+page.svelte -->
<script>
  import { getContext } from 'svelte';
  import Upload from '$lib/components/Upload.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Button from '$lib/Button.svelte';
  import { photoState } from '$lib/state/photoState.svelte.js';

  const layoutState = getContext('layout-key');

  $effect(() => {
      layoutState.sidebar = sidebar;
      layoutState.title = 'upload';
  })
</script>

{#snippet sidebar()}
  <Sidebar />
  <p>Please choose a photo to work with, if you don't like the first you've chosen, just select another.</p>
  {#if photoState.avatar}
    <div class="photo-added"><p>When you're happy with your photo, go ahead and go to the filter page.</p>
    <a class="nav-link" href="/filter">Filters »</a>
    </div>
  {/if}
  {/snippet}


<Upload />

