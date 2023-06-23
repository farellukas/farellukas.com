<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="max-w-4xl m-auto px-8">
	<Navbar />
	<slot />
	<Footer />
</div>
