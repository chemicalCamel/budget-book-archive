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

    function getDatetime(transaction: TransactionType): string {
        return `${transaction.date.getFullYear()}-${transaction.date.getMonth()}`;
    }
</script>

<div class="container">
    {#if transactions[0]}
        <div class="month">
            <time datetime={getDatetime(transactions[0])}>
                {transactions[0].date.toLocaleDateString(undefined, { month: 'long' })}
            </time>
        </div>
    {/if}

    {#each transactions as transaction}
        <Transaction {transaction} />
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;

        width: 60%;

        overflow-y: auto;
    }

    .container::-webkit-scrollbar {
        width: 4px;
    }

    .container::-webkit-scrollbar-track {
        background-color: transparent;
    }

    .container::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    .container:hover::-webkit-scrollbar {
        width: 4px;
    }

    .container:hover::-webkit-scrollbar-track {
        background-color: var(--gray-900);
    }

    .container:hover::-webkit-scrollbar-thumb {
        background-color: var(--gray-800);
    }

    .month {
        position: sticky;
        top: 0;
        align-self: center;

        width: 100%;

        padding: 0.5rem 0;
        /* margin-bottom: 1rem; */

        background-color: var(--gray-800);
        border-bottom: var(--border-style) var(--primary-600);

        text-align: center;
        font-weight: 700;
    }

    .month::after {
        --width: 0.5rem;

        /* content: ''; */

        position: absolute;
        bottom: calc(((var(--width) / 2) + var(--border-width)) * (-1));
        left: 50%;

        width: var(--width);
        aspect-ratio: 1;

        background-color: var(--primary-600);
        transform: rotate(45deg);
        z-index: -1;
    }
</style>
