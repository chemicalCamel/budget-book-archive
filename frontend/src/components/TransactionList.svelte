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
    {#each transactions as transaction}
        <Transaction {transaction} />
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        width: 60%;
    }
</style>
