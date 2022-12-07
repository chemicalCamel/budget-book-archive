<script lang="ts">
    export let theme: 'primary' | 'secondary' = 'primary';
    export let active = false;
    export let disabled = false;
</script>

<!-- TODO add tooltip with disabled reason -->
<button type="button" class:active {disabled} style="--theme: var(--{theme}-300); --shade: var(--{theme}-600)" on:click>
    <span>
        <slot>No Button Text</slot>
    </span>
</button>

<style>
    button {
        --min-width: 100px;

        position: relative;

        min-width: var(--min-width);

        background: none;
        border: none;

        padding: 0.5rem 0.5rem;

        color: white;
        font-size: inherit;
        font-weight: 700;

        text-align: center;
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

    button > span {
        position: relative;
    }

    button.active > span::after {
        content: '';

        width: 120%;
        min-width: calc(var(--min-width));
        height: 2px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        bottom: -4px;
        background-color: var(--theme);
        border-radius: 1rem;
    }
</style>
