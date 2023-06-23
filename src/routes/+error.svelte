<script>
	import { page } from '$app/stores';
</script>

<div class="text-center">
	<h1>Error {$page.status}</h1>
	<h2>{$page.error?.message}</h2>
</div>
