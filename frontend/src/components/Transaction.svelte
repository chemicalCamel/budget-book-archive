<script lang="ts">
    import { slide } from 'svelte/transition';

    import type { Transaction } from '$schemas/transaction.schema';
    import TransactionDetails from '$components/TransactionDetails.svelte';

    export let transaction: Transaction;

    let detailsOpen = false;

    function dateToString(date: Date): string {
        return `${date.getDate().toString().padStart(2, '0')}`;
    }
</script>

<div class="transaction">
    <div class="header" on:click={() => (detailsOpen = !detailsOpen)}>
        <div class="left">
            <div class="date">
                {dateToString(transaction.date)}
            </div>
            <div class="name">
                {transaction.name}
            </div>
        </div>
        <div class="amount" style="color: {transaction.type === 'income' ? 'var(--green-400)' : 'var(--red-300)'};">
            {transaction.amount}€
        </div>
    </div>

    {#if detailsOpen}
        <div class="details" transition:slide|local>
            <TransactionDetails {transaction} />
        </div>
    {/if}
</div>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0.8rem;

        background-color: var(--gray-900);
        border-bottom: var(--border-style) var(--gray-700);

        transition: border 0.125s;
    }

    .transaction:hover .header {
        border-color: var(--gray-400);
    }

    .left {
        display: flex;
        align-items: center;
    }

    .date,
    .name,
    .amount {
        padding: 0.2rem 1rem;
    }

    .date {
        background-color: var(--primary-800);
        border-bottom: var(--border-style) var(--primary-600);
    }

    .amount {
        font-weight: 700;
    }
</style>
