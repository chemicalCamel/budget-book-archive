<script lang="ts">
    import Button from './Button.svelte';

    import { log, logState } from '$stores/log';
</script>

<div class="log-modal-container">
    <div class="logs">
        {#each $log as log}
            <div
                class="log"
                style="border-color: {log.type === 'error' ? 'red' : log.type === 'warning' ? 'yellow' : 'white'};">
                <div class="header">
                    <span>
                        {log.timestamp.toLocaleTimeString()}
                    </span>
                    <span class="title">
                        {log.title}
                    </span>
                </div>
                <div class="body">
                    {log.message}
                </div>
            </div>
        {/each}
        <div class="controls">
            <Button on:click={() => logState.toggle()}>Close</Button>
        </div>
    </div>
</div>

<style>
    .log-modal-container {
        z-index: 10;

        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: rgba(1, 1, 1, 0.7);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logs {
        padding: 1rem;

        background-color: black;
        border-top: var(--border-style) var(--primary-800);
        border-bottom: var(--border-style) var(--primary-800);

        height: 90%;
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        overflow-y: scroll;
    }

    .log {
        background-color: var(--gray-900);

        border-radius: 0.2rem;
        border-left: 5px solid;

        color: var(--text);
    }

    .log > * {
        padding: 0.5rem;
    }

    .log > .header {
        background-color: var(--gray-700);

        border-radius: 0.2rem;
    }

    .log > .header > .title {
        font-weight: 700;
    }

    @media (min-width: 1024px) {
        .logs {
            width: 60%;
        }
    }
</style>
