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
  <p>Keep on taking photos until you're happy with the preview to the right of the webcam window.</p>
  {#if photoState.avatar}
    <div class="photo-added"><p>When you're happy with your photo, go ahead and go to the filter page.</p>
    <a class="nav-link" href="/filter">Filters »</a>
    </div>
  {/if}
{/snippet}

<Webcam />

