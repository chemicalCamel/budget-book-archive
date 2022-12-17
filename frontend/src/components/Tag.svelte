<script lang="ts">
    import type { Tag } from '$schemas/transaction.schema';
    import type { Theme } from 'src/types';

    import Button from './Button.svelte';

    export let tag: Tag;
    export let removeable = false;
    export let theme: Theme = 'primary';
</script>

<div class="tag" class:theme={!removeable} style="--tag-theme: var(--{theme}-300)">
    {#if tag.type}
        <span>{tag.type}:&nbsp;</span>
    {/if}
    <span>
        {tag.name}
    </span>
    {#if removeable}
        <Button icon="close" {theme} />
    {/if}
</div>

<style>
    .tag {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        padding: 0.4rem 0.5rem;

        background-color: var(--gray-300);
        color: black;

        border-radius: 0.5rem;
        transition: all 0.125s;

        cursor: default;
    }

    .tag.theme:hover {
        background-color: var(--tag-theme);
    }
</style>
