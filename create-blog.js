import fs from 'fs';
import path from 'path';

const blogPostsDirectory = path.join(process.cwd(), 'src/blogs');

function createNewBlogPost(title) {
	const date = new Date();
	const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
	const metadata = `---
title: ${title}
date: ${formattedDate}
---`;

	const filename = title.toLowerCase().replace(/ /g, '-');
	const filePath = path.join(blogPostsDirectory, `${filename}.md`);
	fs.writeFileSync(filePath, metadata, 'utf8');
}

const title = process.argv[2];
if (title) {
	createNewBlogPost(title);
	console.log('Blog post created successfully!');
} else {
	console.error('Please provide a title for the blog post.');
}
