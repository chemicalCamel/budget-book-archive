<script lang="ts">
    // TODO warning / error on options with the same value

    import { createEventDispatcher, onMount } from 'svelte';

    import type { Option } from 'src/types';
    import Button from './Button.svelte';

    export let options: Array<Option>;
    /**
     * Initially active
     */
    export let active: Option | Array<Option> | undefined = undefined;
    export let multi = false;
    export let theme: 'primary' | 'secondary' = 'primary';

    const dispatch = createEventDispatcher<{ select: Option | Array<Option> }>();

    onMount(() => {
        if (!active) {
            return;
        }

        if (active instanceof Array) {
            active.forEach((activeOption) => {
                options.filter(($) => $.value === activeOption.value).map(($) => ($.active = true));
                options = options;
            });
        } else {
            // unneccessary assignment because of weird typescript behavior
            const activeOption = active;
            options.filter(($) => $.value === activeOption.value).map(($) => ($.active = true));
        }

        options = options;
    });

    function toggle(option: Option) {
        if (!multi) {
            options.forEach(($) => ($.active = false));
        }

        option.active = !option.active;
        options = options;

        dispatch('select', multi ? options.filter(($) => $.active) : options.find(($) => $.active));
    }
</script>

<div class="toggle-buttons">
    {#each options as option}
        <Button {theme} active={option.active} on:click={() => toggle(option)}>
            {option.name}
        </Button>
    {/each}
</div>

<style>
    .toggle-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        gap: 0.5rem 0;

        font-size: 0.8rem;
        width: 100%;

        padding: 0.3rem 0.7rem;

        border: var(--border-style) var(--gray-700);
        border-radius: 0.5rem;
    }
</style>
