<script lang="ts">
	import type { LayoutServerData } from './$types';

	// Get data from server
	export let data: LayoutServerData;
	const blogs = data.blogs;

	// Define types
	interface blogInfo {
		title: string;
		endpoint: string;
		date: string;
	}
	interface yearInfo {
		[year: string]: blogInfo[];
	}

	// Group blogs by year
	const blogsByYear: yearInfo = {};
	const years: number[] = [];
	blogs.forEach((blog) => {
		const year = blog.date.split('/').slice(-1)[0];
		if (!blogsByYear[year]) {
			blogsByYear[year] = [];
			years.push(year);
		}
		blogsByYear[year].push(blog);
	});
</script>

<slot />

<div class="max-w-4xl m-auto px-8">
	{#each years as year}
		<div class="mb-4">
			<h4 class="mb-2">{year}</h4>
			{#each blogsByYear[year] as blog}
				<a href={`/blog/${blog.endpoint}`}>
					<p class="text-blue-600 hover:underline">
						<strong>{blog.title}</strong> // {blog.date}
					</p>
				</a>
			{/each}
		</div>
	{/each}
</div>
