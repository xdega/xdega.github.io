const fs = require('fs');

if (!process.argv[2]) {
  console.log("post [some-title-slug]");
  return;
}

// This should be a valid slug in the format "some-title-here"
const slug = process.argv[2];
const title = slug.split('-').map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
const filepath = `./content/blog/${slug}`
const time = new Date().toISOString()

console.log(`Generating new Blog Post, ${title} -> ${filepath}/index.md`);


const content =`---
title: ${title}
date: "${time}
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo, 
laboriosam, aliquam totam eius hic maiores voluptatem nam aut debitis sunt, illum 
ea aspernatur ab error provident. Aut exercitationem, eos dolorem esse repellendus 
illo dicta tenetur nam, amet qui voluptatum odit repudiandae veritatis asperiores 
maxime expedita. Unde possimus nulla accusantium?"
---

### Lorem Ipsum

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magnam in ad cupiditate. 
Asperiores, nisi veritatis nostrum ab quia assumenda!

`

if (!fs.existsSync(filepath)){
  fs.mkdirSync(filepath, {recursive: true});
}

fs.writeFile(`${filepath}/index.md`, content, function(err) {
  if(err) {
    return console.log('\x1b[31m', err);
  }
  console.log('\x1b[36m%s\x1b[0m', 'Blog Post Created!');
}); 