<!-- src/routes/+page.svelte -->
<script>
  import { getContext } from 'svelte';
  import Filters from '$lib/components/Filters.svelte';
  import Sidebar from '$lib/components/Sidebar.svelte';
  import { photoState } from '$lib/state/photoState.svelte.js';
    import { datadogRum } from '@datadog/browser-rum';

  const layoutState = getContext('layout-key'),
        filterState = getContext('filter');

  const effectPipeline = () => {
    datadogRum.addAction('filter', {
      filter: {
        filterName: filterState.selected,
      },
    });

  }


  $effect(() => {
      layoutState.sidebar = sidebar;
      layoutState.title = 'filter';

  })
</script>

{#snippet sidebar()}
  <Sidebar />
 <p>Let's add some filters to your photo:</p>
 <select onchange={effectPipeline} bind:value={filterState.selected}>
  <option value="none">No Filter</option>
  <option value="greyscale">GreyScale</option>
  <option value="threeDee">3D Glasses</option>
  <option value="oceanic">Oceanic</option>
  <option value="lofi">Lofi</option>
  <option value="marine">Marine</option>
  <option value="seagreen">Seagreen</option>
  <option value="liquid">Liquid</option>
  <option value="diamante">Diamante</option>
  <option value="radio">Radio</option>
  <option value="twenties">Twenties</option>
  <option value="rosetint">Rosetint</option>
  <option value="mauve">Mauve</option>
  <option value="bluechrome">Blue Chrome</option>
  <option value="vintage">Vintage</option>
  <option value="perfume">Perfume</option>
  <option value="serenity">Serenity</option>
</select>
<p>Once you're happy, let's head to the decorate page!</p>

<a class="nav-link" href="/decorate">Decorate »</a>
  {/snippet}

<Filters />

