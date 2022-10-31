<script lang="ts">
</script>

<div class="toolbar">
    <div class="container">
        <h3>Filter</h3>
        <div class="type">
            <div class="title">Type</div>
            <div class="options">
                <span>All</span>
                <span>Expenses</span>
                <span>Incomes</span>
            </div>
        </div>
    </div>
</div>

<style>
    .toolbar {
        height: 100%;

        background-color: var(--gray-900);
    }

    .container {
        position: sticky;
        top: 0;
    }

    .toolbar > * {
        padding: 1rem;
    }

    .title {
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .options {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 1rem;
    }
</style>
