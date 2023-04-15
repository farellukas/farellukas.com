<script lang="ts">
	type Skill = {
		name: string;
		desc: string;
	};

	type SocialLink = {
		name: string;
		link: string;
	};

	const skills: Skill[] = [
		{
			name: 'Python',
			desc: 'the very first programming language I learnt.'
		},
		{
			name: 'JavaScript',
			desc: 'I like coding in JS and discovering new cool frameworks.'
		},
		{
			name: 'TypeScript',
			desc: 'loved TS ever since trying it out in SacHacks 2021.'
		},
		{
			name: 'C',
			desc: 'learnt all about it in a course I took in university.'
		},
		{
			name: 'React',
			desc: 'a great and popular JS framework I used on some of my projects.'
		},
		{
			name: 'Svelte',
			desc: 'a very fun and pretty JS framework to work with.'
		},
		{
			name: 'Tailwind',
			desc: 'an awesome and my preferred CSS framework, super easy and fun.'
		},
		{
			name: 'MongoDB',
			desc: 'first database I learnt, enjoyable and simple to get into.'
		},
		{
			name: 'Firebase',
			desc: 'a really nice database that has great docs and easy to set up.'
		},
		{
			name: 'Express',
			desc: 'the web framework that I use for most of my backend projects.'
		}
	];

	const socialLinks: SocialLink[] = [
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/farellukas'
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/farellukas'
		},
		{
			name: 'GitHub',
			link: 'https://www.github.com/farellukas'
		}
	];
</script>

<section id="about" class="my-16 flex flex-col gap-12">
	<div class="flex flex-col gap-4">
		<h5>👋 get to know about me.</h5>
		<p>
			Hi, my name is Farel Lukas. I am originally from Indonesia but am currently studying Computer
			Science at the University of Alberta in Canada. I enjoy playing sports, especially basketball,
			building keyboards, and video games. I also enjoy programming as well as learning new skills
			and technologies in the modern world.
		</p>
	</div>

	<div class="flex flex-col gap-4">
		<h5>🧑‍💻 technologies i know.</h5>
		<ul>
			{#each skills as skill}
				<li class="mb-3"><b>{skill.name}</b>: {skill.desc}</li>
			{/each}
			<li>...more to come.</li>
		</ul>
	</div>

	<div class="flex flex-col gap-4">
		<h5>📞 ways to connect with me.</h5>
		<div class="sm:flex sm:gap-4">
			{#each socialLinks as socialLink}
				<a
					href={socialLink.link}
					target="_blank"
					rel="noreferrer"
					class="flex items-center gap-1 mb-3 sm:mb-0 underline underline-offset-4"
				>
					<p>
						{socialLink.name}
					</p>

					<!-- icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						width="16px"
						height="16px"
						class="inline"
					>
						<path
							d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"
						/>
					</svg>
				</a>
			{/each}
		</div>
	</div>
</section>
