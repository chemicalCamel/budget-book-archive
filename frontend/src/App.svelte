<script lang="ts">
    import { slide } from 'svelte/transition';

    import TransactionList from '$components/TransactionList.svelte';
    import Toolbar from '$components/Toolbar.svelte';

    const largeScreenMediaQuery = window.matchMedia('(min-width: 1024px)');

    let filterOpen = false;
    let isLargeScreen = largeScreenMediaQuery.matches;

    largeScreenMediaQuery.addEventListener('change', ($) => {
        isLargeScreen = $.matches;
    });
</script>

<main>
    <div class="navigation-container">Placeholder</div>
    <div class="transcation-list-container">
        <TransactionList />
    </div>
    {#if isLargeScreen || filterOpen}
        <div class="toolbar-container" transition:slide>
            <Toolbar />
        </div>
    {/if}
</main>

<footer>
    {#if !isLargeScreen}
        <div class="toggle-filter">
            <button on:click={() => (filterOpen = !filterOpen)}>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    {#if filterOpen}
                        <path
                            fill="currentColor"
                            d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    {:else}
                        <path fill="currentColor" d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z" />
                    {/if}
                </svg>
            </button>
        </div>
    {/if}
</footer>

<style>
    .navigation-container {
        position: fixed;
        left: 0;
        bottom: 0;

        width: 0;
        overflow-x: hidden;
    }

    .toolbar-container {
        position: fixed;
        right: 0;
        bottom: 0;

        width: 100%;
    }

    footer {
        position: fixed;
        left: 0;
        bottom: 0;

        width: 100%;
    }

    .toggle-filter {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
    }

    .toggle-filter button {
        position: relative;

        display: flex;
        width: min-content;
        cursor: pointer;

        padding: 0.5rem;

        background-color: var(--gray-900);
        border-radius: 6px;
        border: var(--border-style) var(--secondary-400);
    }

    .toggle-filter button:hover {
        border-color: var(--secondary-600);
    }

    @media (min-width: 1024px) {
        main {
            display: flex;
        }

        .transcation-list-container {
            flex-grow: 1;
        }

        .toolbar-container,
        .navigation-container {
            position: static;
            width: 25%;
        }
    }
</style>
