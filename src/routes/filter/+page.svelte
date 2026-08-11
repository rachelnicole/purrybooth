<!-- src/routes/+page.svelte -->
<script>
  import { getContext } from 'svelte';
  import Filters from '$lib/components/Filters.svelte';
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
 <p>Let's add some filters to your photo:</p><select><option value="none">No Filter</option><option value="greyscale">GreyScale</option><option value="threeDee">3D Glasses</option><option value="oceanic">Oceanic</option><option value="islands">Islands</option><option value="marine">Marine</option><option value="seagreen">Seagreen</option><option value="liquid">Liquid</option><option value="diamante">Diamante</option><option value="radio">Radio</option><option value="twenties">Twenties</option><option value="rosetint">Rosetint</option><option value="mauve">Mauve</option><option value="bluechrome">Blue Chrome</option><option value="vintage">Vintage</option><option value="perfume">Perfume</option><option value="serenity">Serenity</option></select><p>Once you're happy, let's head to the decorate page!</p><button type="button" class="btn">Decorate »</button>
  {/snippet}

<Filters />

