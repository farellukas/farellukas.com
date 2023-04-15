<script lang="ts">
	import ProjectContent from './ProjectContent.svelte';

	// import previews
	import farellukas from '../assets/previews/farellukas.png';
	import vcard_generator from '../assets/previews/vcard_generator.gif';
	import chew_finder from '../assets/previews/chew_finder.gif';

	type Project = {
		preview: string;
		name: string;
		desc: string;
		tools: string[];
		repo: string;
	};

	const projects: Project[] = [
		{
			preview: farellukas,
			name: 'farellukas.github.io',
			desc: 'This project is the website you are seeing right now. It is my personal portfolio website that I will use to showcase my skills and experience.',
			tools: ['svelte', 'tailwindcss', 'typescript'],
			repo: 'https://github.com/farellukas/farellukas.github.io'
		},
		{
			preview: vcard_generator,
			name: 'vCard QR Code Generator',
			desc: 'A web application that generates a QR code containing a customized virtual contact file.',
			tools: ['python', 'django', 'bootstrap'],
			repo: 'https://github.com/farellukas/vcard-qrcode-gen'
		},
		{
			preview: chew_finder,
			name: 'Chew Finder',
			desc: 'A web application that helps users find new restaurants to eat in a dating app style.',
			tools: ['react', 'tailwindcss', 'typescript', 'express', 'nodejs'],
			repo: 'https://github.com/farellukas/chew-finder'
		}
	];

	// indexing projects
	let i: number = 0;
	const handlePrev = () => {
		if (i !== 0) {
			i--;
		}
	};
	const handleNext = () => {
		if (i !== projects.length - 1) {
			i++;
		}
	};
</script>

<svelte:head>
	<!-- import icons CDN -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
	/>
</svelte:head>

<section id="projects" class="bg-[#3C2317] text-white">
	<div class="max-w-4xl m-auto p-8 flex flex-col gap-8">
		<h5 class="">🔧 projects i made.</h5>

		<ProjectContent project={projects[i]} />

		<!-- navigation links -->
		<div class="flex justify-between items-center font-semibold select-none">
			<!-- previous project -->
			<p
				on:click={handlePrev}
				on:keypress={handlePrev}
				class={`h-8 px-2 flex items-center bg-[#F5EFE6] text-black hover:underline ${
					i === 0 && 'invisible'
				}`}
			>
				prev
			</p>

			<!-- repo link -->
			<a href={projects[i].repo} target="_blank" rel="noreferrer">
				<i class="devicon-github-original text-[2rem]" />
			</a>

			<!-- next project -->
			<p
				on:click={handleNext}
				on:keypress={handleNext}
				class={`h-8 px-2 flex items-center bg-[#F5EFE6] text-black hover:underline ${
					i === projects.length - 1 && 'invisible'
				}`}
			>
				next
			</p>
		</div>
	</div>
</section>
