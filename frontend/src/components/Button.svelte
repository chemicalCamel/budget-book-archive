<script lang="ts">
    import type { Icon as IconType } from 'src/types';
    import type { Theme } from 'src/types';

    import Icon from '$components/Icon.svelte';

    export let theme: Theme = 'primary';
    export let active = false;
    export let disabled = false;
    export let icon: IconType | undefined = undefined;
</script>

<!-- TODO add tooltip with disabled reason -->
<button
    type="button"
    class:active
    class:icon
    style="--theme: var(--{theme}-300); --shade: var(--{theme}-600)"
    {disabled}
    on:click>
    {#if icon}
        <Icon icon="close" size="1rem" />
    {:else}
        <span>
            <slot>No Button Text</slot>
        </span>
    {/if}
</button>

<style>
    .icon {
        --min-width: 0;
        padding: 0;
    }

    button {
        --min-width: 100px;

        position: relative;

        min-width: var(--min-width);
        padding: 0.5rem;

        background: none;
        border: none;

        color: currentColor;
        font-size: inherit;
        font-weight: 700;
        text-align: center;
    }

    button:where(:hover, :focus) {
        outline: none;
        cursor: pointer;
        color: var(--theme);
    }

    button:where(:hover, :focus).icon {
        color: var(--shade);
    }

    button:where(:hover, :focus):not(.icon) {
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
