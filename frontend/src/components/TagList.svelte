<script lang="ts">
    import type { Tag as TagType } from '$schemas/transaction.schema';
    import type { Theme } from 'src/types';

    import Tag from '$components/Tag.svelte';

    export let tags: Array<TagType>;
    export let removeable = false;
    export let theme: Theme | undefined = undefined;
</script>

<div class="tag-list">
    {#each tags as tag}
        <Tag {tag} {removeable} {theme} />
    {/each}
</div>

<style>
    .tag-list {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
</style>
