<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="max-w-4xl min-h-[100vh] m-auto px-8 flex flex-col justify-between">
	<Navbar />
	<slot />
	<Footer />
</div>
