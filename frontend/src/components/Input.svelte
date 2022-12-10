<script lang="ts">
    export let type = 'text';
    export let key: string;
    export let theme: 'primary' | 'secondary' = 'primary';
</script>

<div class="input-group" style="--theme: var(--{theme}-300">
    <input {type} id={key} placeholder=" " on:change />
    {#if $$slots.label}
        <label for={key}>
            <slot name="label" />
        </label>
    {/if}
</div>

<style>
    .input-group {
        position: relative;
        font-size: 0.8rem;
    }

    input {
        background: transparent;
        border: none;

        color: inherit;
        font-size: inherit;

        border-bottom: var(--border-style) var(--gray-700);
        padding: 0.5rem;
        transition: 0.125s ease all;
    }

    input:hover {
        border-color: var(--gray-400);
    }

    input:focus {
        outline: none;
        border-color: var(--theme);
    }

    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
        font-size: 0.6rem;
        top: -0.7rem;
        left: 1rem;
    }

    label {
        position: absolute;
        left: 0.5rem;
        top: 0.5rem;
        pointer-events: none;
        transition: 0.125s ease all;
    }
</style>
