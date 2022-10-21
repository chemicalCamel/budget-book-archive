<script lang="ts">
    import type { Transaction } from '$schemas/transaction.schema';

    export let transaction: Transaction;

    function dateToString(date: Date): string {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day}`;
    }
</script>

<div class="container">
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

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0.8rem;

        background-color: var(--gray-900);
        border-bottom: var(--border-style) var(--gray-700);

        transition: border 0.125s;
    }

    .container:hover {
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
