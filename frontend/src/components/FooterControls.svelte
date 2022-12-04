<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import Icon from './Icon.svelte';

    const dispatch = createEventDispatcher<Record<string, boolean>>();

    let toolbarOpen = false;

    function toggleToolbar() {
        toolbarOpen = !toolbarOpen;

        dispatch('toggleToolbar', toolbarOpen);
    }
</script>

<div class="footer-controls">
    <button on:click={() => toggleToolbar()}>
        <Icon icon={toolbarOpen ? 'close' : 'menu'} />
    </button>
</div>

<style>
    .footer-controls {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;

        padding: 1rem;
    }

    button {
        background-color: var(--gray-800);
        border: none;
        border-radius: 0.5rem;
        padding: 0.7rem;

        box-shadow: 0 0 20px var(--shadow);
    }

    button:where(:hover, :focus) {
        outline: none;
        cursor: pointer;
        color: var(--secondary-300);
    }

    button:active {
        background-color: var(--gray-900);
    }
</style>
