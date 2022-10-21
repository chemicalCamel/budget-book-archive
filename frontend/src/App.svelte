<script lang="ts">
    import Header from '$components/Header.svelte';
    import TransactionList from '$components/TransactionList.svelte';
</script>

<main>
    <TransactionList />
</main>

<style>
    main {
        display: flex;
        justify-content: center;
    }
</style>
