<!-- src/lib/components/Sidebar.svelte -->
<script>
  // Accept a "label" prop, with a default fallback
  let { label = "I'm a sidebar" } = $props();
</script>

<p>{label}</p>

