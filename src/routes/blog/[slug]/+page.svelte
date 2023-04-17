<script lang="ts">
	export let data;

	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<article class="max-w-4xl m-auto px-8 mb-12">
	<header class="mb-8">
		<h1 class="mb-4">{data.title}</h1>
		<p>
			<em
				>{`${month[new Date(data.date).getMonth()]} ${new Date(data.date).getDate()}, ${new Date(
					data.date
				).getFullYear()}`}</em
			>
		</p>
	</header>

	<svelte:component this={data.content} />
</article>
