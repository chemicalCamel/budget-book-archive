<script lang="ts">
    import type { Tag } from '$schemas/transaction.schema';

    export let tag: Tag;
</script>

<div class="tag">
    {#if tag.type}
        <span>{tag.type}:&nbsp;</span>
    {/if}
    <span>
        {tag.name}
    </span>
</div>

<style>
    .tag {
        position: relative;
        padding: 0.4rem 0.5rem;

        background-color: var(--gray-300);
        color: black;

        border-radius: 0.5rem;
        transition: all 0.125s;
    }

    .tag:hover {
        background-color: var(--secondary-300);
    }
</style>
