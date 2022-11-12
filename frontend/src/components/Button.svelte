<script lang="ts">
    export let theme: 'primary' | 'secondary' = 'primary';
    export let active = false;
    export let disabled = false;
</script>

<!-- TODO add tooltip with disabled reason -->
<button type="button" class:active {disabled} style="--theme: var(--{theme}-300); --shade: var(--{theme}-600)" on:click>
    <slot>No Button Text</slot>
</button>

<style>
    button {
        position: relative;

        min-width: 100px;

        background: none;
        border: none;

        padding: 0.5rem 0.5rem;

        color: white;
        font-size: inherit;
        font-weight: 700;
    }

    button:where(:hover, :focus) {
        outline: none;
        cursor: pointer;
        color: var(--theme);
    }

    button:disabled {
        cursor: default;
        color: var(--disabled);
    }

    button:active {
        color: var(--shade);
    }

    button.active::after {
        content: '';

        width: 80%;
        height: 2px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        bottom: 4px;
        background-color: var(--theme);
        border-radius: 1rem;
    }
</style>
