<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';

    import type { Option } from 'src/types';
    import Button from './Button.svelte';

    export let options: Array<Option>;
    export let active: Option | undefined = undefined;
    export let theme: 'primary' | 'secondary' = 'primary';

    const dispatch = createEventDispatcher<{ select: Option }>();

    onMount(() => {
        if (active && !options.some(($) => $.value === active?.value)) {
            // TODO use custom error service
            throw new Error('Active option not in available options.');
        }
    });

    function activate(option: Option) {
        active = option;

        dispatch('select', option);
    }
</script>

<div class="toggle-buttons">
    {#each options as option, i}
        <Button {theme} active={option.value === active?.value} on:click={() => activate(option)}>
            {option.name}
        </Button>
        {#if i < options.length - 1}
            <div class="devider" />
        {/if}
    {/each}
</div>

<style>
    .toggle-buttons {
        --border-color: var(--gray-700);

        font-size: 0.8rem;
        padding: 0.3rem 0.7rem;
        border: var(--border-style) var(--border-color);
        border-radius: 0.5rem;
        display: flex;
        gap: 0.7rem;
    }

    .devider {
        width: 2px;
        display: inline-block;
        background-color: var(--border-color);
        border-radius: 1rem;
    }
</style>
