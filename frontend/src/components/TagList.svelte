<script lang="ts">
    import type { Tag as TagType } from '$schemas/transaction.schema';
    import Tag from '$components/Tag.svelte';

    export let tags: Array<TagType>;
</script>

<div class="tag-list">
    {#each tags as tag}
        <Tag {tag} />
    {/each}
</div>

<style>
    .tag-list {
        display: flex;
        gap: 0.5rem;
    }
</style>
