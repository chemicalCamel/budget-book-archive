<script lang="ts">
    import type { Transaction } from '$schemas/transaction.schema';

    export let transaction: Transaction;

    function dateToString(date: Date): string {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}.${month}`;
    }
</script>

<div class="container">
    <div>
        {transaction.name}
    </div>
    <div class="date">
        {dateToString(transaction.date)}
    </div>
    <div class="amount" style="color: {transaction.type === 'income' ? 'var(--green-400)' : 'var(--red-300)'};">
        {transaction.amount}€
    </div>
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 20% 1fr;

        padding: 1rem;

        background-color: var(--gray-900);
        border-bottom: 2px solid var(--gray-800);

        transition: border 0.125s;
    }

    .container:hover {
        border-color: var(--gray-400);
    }

    .date {
        justify-self: center;
    }

    .amount {
        justify-self: end;

        font-weight: 700;
    }
</style>
