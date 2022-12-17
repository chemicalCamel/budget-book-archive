<script lang="ts">
    import type { Transaction } from '$schemas/transaction.schema';
    import TagList from '$components/TagList.svelte';

    export let transaction: Transaction;
</script>

<div class="transaction-details">
    <div>Name</div>
    <div>{transaction.name}</div>

    {#if transaction.notes}
        <div>Notes</div>
        <ul>
            {#each transaction.notes as note}
                <li>
                    <span class="list-item-text">{note}</span>
                </li>
            {/each}
        </ul>
    {/if}

    {#if transaction.tags}
        <div>Tags</div>
        <TagList tags={transaction.tags} theme="secondary" />
    {/if}
</div>

<style>
    .transaction-details {
        font-size: 0.8rem;

        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        gap: 0.8rem 2rem;

        padding: 1rem;

        background-color: var(--gray-900);
        border-bottom: var(--border-style) var(--gray-700);
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: square;
        list-style-position: inside;
    }

    li {
        color: var(--secondary-400);
        transition: color 125ms;
    }

    li:hover {
        color: var(--secondary-600);
    }

    .list-item-text {
        color: var(--text);
    }
</style>
