<script lang="ts">
    import Header from '$components/Header.svelte';
    import TransactionList from '$components/TransactionList.svelte';
</script>

<Header>
    <svelte:fragment slot="heading">Budget Book</svelte:fragment>
</Header>

<main>
    <TransactionList />
</main>

<style>
    main {
        display: flex;
        justify-content: center;

        /* margin-top: 1rem; */

        max-height: calc(100vh - 3rem - 2px);
    }
</style>
