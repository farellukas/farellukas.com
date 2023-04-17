export async function load({ params }) {
  const { slug } = params;
  const post = await import(`../../../blogs/${slug}.md`);
  const { title, date } = post.metadata;
  const content = post.default;

  return {
    title,
    date,
    content,
  };
}
