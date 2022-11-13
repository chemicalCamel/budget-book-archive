<script lang="ts">
    import ToggleButton from '$components/ToggleButton.svelte';

    import type { Option } from 'src/types';

    const typeOptions: Array<Option> = [
        {
            name: 'All',
            value: 'all',
        },
        {
            name: 'Expense',
            value: 'expense',
        },
        {
            name: 'Income',
            value: 'income',
        },
    ];

    const timeOptions: Array<Option> = [
        {
            name: 'Last 3 Months',
            value: 'last3months',
        },
        {
            name: 'Year to now',
            value: 'ytn',
        },
        {
            name: '2022',
            value: '2022',
        },
    ];

    const tagOptions: Array<Option> = [
        {
            name: 'Account: Bank 1',
            value: 'account:bank1',
        },
        {
            name: 'Account: Bank 2',
            value: 'account:bank2',
        },
        {
            name: 'Groceries',
            value: 'groceries',
        },
        {
            name: 'Amazon',
            value: 'amazon',
        },
        {
            name: 'Online-Auction',
            value: 'online-auction',
        },
    ];

    const test = 'abc' === 'abc';

    const onSelect = (abc: CustomEvent<Option | Array<Option>>) => console.log('select: ', abc.detail);
</script>

<div class="toolbar">
    <div>
        <h2>Filter</h2>
        <div class="filter type">
            <div class="title">Type</div>
            <div class="options">
                <ToggleButton on:select={onSelect} options={typeOptions} active={typeOptions[0]} theme="secondary" />
            </div>
        </div>
        <div class="devider" />
        <div class="filter time">
            <div class="title">Time</div>
            <div class="options">
                <ToggleButton options={timeOptions} active={timeOptions[0]} theme="secondary" />
            </div>
        </div>
        <div class="filter tag">
            <div class="title">Tag</div>
            <div class="options">
                <ToggleButton
                    on:select={onSelect}
                    options={tagOptions}
                    active={[tagOptions[0], tagOptions[2]]}
                    theme="secondary"
                    multi={true} />
            </div>
        </div>
    </div>
</div>

<style>
    h2 {
        margin-bottom: 1rem;
    }

    .toolbar {
        height: 100%;

        background-color: var(--gray-900);

        padding-bottom: 3rem;
    }

    .toolbar > div {
        position: sticky;
        top: 0;

        padding: 0.5rem 1rem;
    }

    .filter {
        margin-bottom: 1rem;
    }

    .title {
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .options {
        display: flex;
    }

    @media (min-width: 1024px) {
        .toolbar {
            padding-bottom: 0;
        }
    }
</style>
