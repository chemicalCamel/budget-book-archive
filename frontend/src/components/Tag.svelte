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
        padding: 0.2rem 0.5rem;

        border-bottom: 2px solid var(--secondary-400);

        transition: all 0.125s;
    }

    .tag:hover {
        border-color: var(--secondary-600);
    }
</style>
