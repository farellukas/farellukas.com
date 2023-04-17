<script lang="ts">
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
	const blogs = data.blogs;
</script>

<slot />

<div class="max-w-4xl m-auto px-8">
	{#each blogs as blog}
		<a href={`/blog/${blog.endpoint}`}>
			<p class="text-blue-600 hover:underline">
				<strong>{blog.title}</strong> // {blog.date}
			</p>
		</a>
	{/each}
</div>
