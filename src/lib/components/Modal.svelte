<script>
	let { showModal = $bindable(), header, children } = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div class="modal wrapper">
    <div class="main-container modal">
        <div class="title">
          <h1><div class="icon-my-computer"></div>About プリクラ</h1>
        </div>
        <div class="ie-bar">
          <label htmlFor="url-second" class="label">Address:</label>
          <div class="combo">
          
          </div>
        </div>
        <div class="container-inner why-container">
		{@render children?.()}
		<!-- svelte-ignore a11y_autofocus -->
		 <button
          type="button"
          class="btn"
          autofocus 
		  onclick={() => dialog.close()}
        >
          close popup
        </button>
	 
          <div class="continue">
 
        </div>
        
        </div>
        <div class="statusbar">
          <div class="left">^_^</div>
          <div class="right">&nbsp;</div>
        </div>
      </div>
    </div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border: none;
		padding: 0;
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
