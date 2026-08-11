<script>
  // Accept a "label" prop, with a default fallback
  let { label = "Click me" } = $props();
</script>

<button>{label}</button>