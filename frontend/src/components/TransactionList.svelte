<script lang="ts">
    import { onMount } from 'svelte';

    import sampleData from '../../../data/sample-transactions.json';

    import type { Transaction as TransactionType } from '$schemas/transaction.schema';
    import { transactionSchema } from '$schemas/transaction.schema';
    import Transaction from '$components/Transaction.svelte';

    let transactions: Array<TransactionType> = [];

    onMount(() => {
        sampleData.forEach(($) => {
            try {
                transactions.push(transactionSchema.parse($));
            } catch (error) {
                console.log(error);
            }
        });

        transactions = [...transactions];
    });

    function showMonth(current: TransactionType, last?: TransactionType): boolean {
        // show before first entry
        if (!last) {
            return true;
        }

        // show on month switch
        return current.date.getMonth() !== last.date.getMonth();
    }

    function getMonthAndYear(transaction: TransactionType): string {
        return `${transaction.date.toLocaleString(undefined, { month: 'long', year: 'numeric' })}`;
    }
</script>

<div class="transaction-list">
    {#each transactions as transaction, i}
        <!-- sticky month header -->
        {#if showMonth(transaction, transactions[i - 1])}
            <div class="month">
                <div class="month-text">{getMonthAndYear(transaction)}</div>
            </div>
        {/if}

        <Transaction {transaction} />
    {/each}
</div>

<style>
    .transaction-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        width: 100%;
    }

    .month {
        position: sticky;
        top: 0;

        padding: 0.5rem 0.8rem;

        background-color: var(--primary-800);
        border-bottom: 4px solid var(--bg);
        border-top: 4px solid var(--bg);
    }

    .month-text {
        padding: 0.2rem 0;

        border-bottom: var(--border-style) var(--primary-600);

        text-align: center;
        font-weight: 700;

        z-index: 1;
    }

    @media (min-width: 768px) {
        .transaction-list {
            width: 60%;
        }
    }

    @media (min-width: 1024px) {
        .transaction-list {
            width: 50%;
        }
    }
</style>
