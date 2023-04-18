<script lang="ts">
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

	export let data;
	$: date = new Date(data.date);
	$: formattedDate = `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
</script>

<article class="max-w-4xl m-auto px-8 mb-12">
	<header class="mb-8">
		<h1 class="mb-4">{data.title}</h1>
		<p>
			<em>{formattedDate}</em>
		</p>
	</header>

	<svelte:component this={data.content} />
</article>
