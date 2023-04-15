<script lang="ts">
  type Project = {
    name: string;
    preview: string;
    desc: string;
    tools: string[];
    repo: string;
  };

  export let project: Project;

  const customIconStyle = {
    express: "original",
  };
</script>

<svelte:head>
  <!-- import icons CDN -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
  />
</svelte:head>

<div class="flex flex-col gap-4">
  <img src={project.preview} alt={project.name} />

  <div class="flex flex-col gap-2">
    <p class="font-bold">{project.name}</p>
    <p>
      {project.desc}
    </p>
  </div>

  <div class="flex flex-col gap-2">
    <p class="font-bold">tools used:</p>

    <div class="flex gap-4 flex-wrap">
      {#each project.tools as tool}
        <i
          class={`devicon-${tool}-${
            customIconStyle[tool] ? customIconStyle[tool] : "plain"
          } text-[2rem]`}
        />
      {/each}
    </div>
  </div>
</div>
