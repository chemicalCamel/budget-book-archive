<script lang="ts">
    import ToggleButton from '$components/ToggleButton.svelte';
    import Input from '$components/Input.svelte';
    import Button from '$components/Button.svelte';
    import TagList from '$components/TagList.svelte';
    import IconButton from '$components/IconButton.svelte';

    import type { Option } from 'src/types';
    import type { Tag as TagType } from '$schemas/transaction.schema';

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

    let tagInput: string;
    let selectedTags: Array<TagType> = [];

    function handleTagInputChange(event: Event) {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }

        tagInput = event.target.value;
    }

    function addTag() {
        selectedTags.push({ name: tagInput });
        selectedTags = selectedTags;
    }

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
            <div class="title">Tags</div>
            <div class="options">
                <div class="tags">
                    <TagList tags={selectedTags} removeable={true} theme="secondary" />
                </div>
                <div class="tag-input-group">
                    <Input key="tag-selection" on:change={handleTagInputChange}>
                        <svelte:fragment slot="label">Tag Input</svelte:fragment>
                    </Input>
                    <Button on:click={() => addTag()}>Add</Button>
                    <Button icon="close" />
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    h2 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }

    .toolbar {
        height: 100%;

        background-color: var(--gray-900);

        padding-bottom: 3.5rem;
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

    .tag-input-group {
        margin-top: 1rem;
        display: flex;
        align-items: center;
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        font-size: 0.8rem;

        --columns: 2;
    }

    @media (min-width: 720px) {
        .options {
            --columns: 3;
        }
    }

    @media (min-width: 1024px) {
        .toolbar {
            padding-bottom: 0;
        }

        .options {
            --columns: 1;
        }
    }

    @media (min-width: 1440px) {
        .options {
            --columns: 2;
        }
    }

    @media (min-width: 1920px) {
        .options {
            --columns: 3;
        }
    }
</style>
