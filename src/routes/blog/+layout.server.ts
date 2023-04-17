import type { LayoutServerLoad } from "./$types";

export const load = (async function() {
  const posts = import.meta.glob('../../blogs/*.md')
  const data = []

  for (const path in posts) {
    const { metadata } = await posts[path]();
    const endpoint = path.replace(/^.*[\\/]/, '').split(".")[0];
    data.push({
      ...metadata,
      endpoint
    })
  }

  // Sort by date
  data.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    blogs: data
  }
}) satisfies LayoutServerLoad