<script lang="ts">
    export let theme: 'primary' | 'secondary' = 'primary';
    export let active = false;
    export let disabled = false;
</script>

<!-- TODO add tooltip with disabled reason -->
<button type="button" class={theme} class:active {disabled} on:click>
    <slot>No Button Text</slot>
</button>

<style>
    button {
        background: none;
        border: none;

        padding: 0.5rem 0.5rem;

        color: white;
        font-size: inherit;
        font-weight: 700;
    }

    button:hover {
        cursor: pointer;
    }

    button:disabled {
        cursor: default;
        color: var(--disabled);
    }

    button:focus {
        outline: none;
    }

    .primary:hover:not(:disabled),
    .primary:focus:not(:disabled),
    .primary.active:not(:disabled) {
        color: var(--primary-300);
    }

    .primary:active:not(:disabled) {
        color: var(--primary-600);
    }

    .secondary:hover:not(:disabled),
    .secondary:focus:not(:disabled),
    .secondary.active:not(:disabled) {
        color: var(--secondary-300);
    }

    .secondary:active:not(:disabled) {
        color: var(--secondary-600);
    }
</style>
