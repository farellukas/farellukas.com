<!-- <script lang="ts">
	import {
		createColumnHelper,
		createSvelteTable,
		getCoreRowModel,
		type TableOptions
	} from '@tanstack/svelte-table';
	const columnHelper = createColumnHelper<string>();

	const data = ['Hello', 'World'];
	const columns = [
		columnHelper.display({
			id: 'hello'
		})
	];

	const options: TableOptions<string> = {
		data,
		columns,
		getCoreRowModel: getCoreRowModel()
	};

	const table = createSvelteTable(options);
</script>

<table>
	<thead />}
</table> -->

<script lang="ts">
	import SvelteTable, { type TableColumns } from 'svelte-table';

	type Project = {
		id: string;
		name: string;
		description: string;
		url: string;
	};

	const rows: Project[] = [
		{
			id: '1',
			name: 'test',
			description: 'test',
			url: 'test'
		},
		{
			id: '2',
			name: 'test',
			description: 'test',
			url: 'test'
		},
		{
			id: '3',
			name: 'test',
			description: 'test',
			url: 'test'
		}
	];
	const columns: TableColumns<Project> = [
		{
			key: 'name',
			title: 'Name',
			value: (v) => v.name
		},
		{
			key: 'description',
			title: 'Description',
			value: (v) => v.description
		},
		{
			key: 'url',
			title: 'URL',
			value: (v) => v.url
		}
	];
</script>

<div class="flex-1">
	<h1>Projects</h1>
	<SvelteTable {rows} {columns} />
</div>
