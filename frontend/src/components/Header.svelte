<header class="container">
    <h1>
        <slot name="heading" />
    </h1>

    <!-- TODO implement navigation -->
    <!-- TODO consider using a icon library -->
    <svg style="width:2rem;height:2rem" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>
</header>

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: var(--gray-900);
        border-bottom: var(--border-style);
        border-color: var(--primary-600);

        padding: 0 1rem;
    }

    h1 {
        display: inline-block;
        cursor: default;

        font-size: 2rem;
        font-weight: 400;

        margin: 0;
    }

    svg:hover {
        cursor: pointer;
    }
</style>
