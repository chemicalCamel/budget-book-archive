<script lang="ts">
    import { slide } from 'svelte/transition';

    import TransactionList from '$components/TransactionList.svelte';
    import Toolbar from '$components/Toolbar.svelte';
    import FooterControls from '$components/FooterControls.svelte';
    import LogModal from '$components/LogModal.svelte';

    import { isLargeScreen } from '$stores/screen';

    let toolbarOpen = false;
</script>

<main>
    <nav class="navigation-container" />
    <div class="content">
        <TransactionList />
    </div>
    {#if $isLargeScreen || toolbarOpen}
        <div class="toolbar-container" transition:slide>
            <Toolbar />
        </div>
    {/if}
</main>

{#if !$isLargeScreen}
    <footer>
        <FooterControls on:toggleToolbar={(event) => (toolbarOpen = event.detail)} />
    </footer>
{/if}

<style>
    .toolbar-container {
        position: fixed;
        bottom: 0;
        width: 100%;
        box-shadow: 0 0 20px var(--shadow);
    }

    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    @media (min-width: 1024px) {
        main {
            display: flex;
        }

        .content {
            flex-grow: 1;
            position: relative;
            box-shadow: 0 0 20px var(--shadow);
        }

        .navigation-container,
        .toolbar-container {
            width: 25%;
            position: static;
        }
    }
</style>
