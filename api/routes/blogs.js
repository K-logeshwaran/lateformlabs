const express = require("express");
const router = express.Router();
const path = require("path");
const { readdirSync, readFileSync, unlinkSync, writeFileSync } = require("fs");
const matter = require("gray-matter");

const articleFolder = path.join(__dirname, "..", "articles");
console.log(articleFolder);

router.get("/", (req, res) => {
  const files = readdirSync(articleFolder);
  const posts = files.map((filename) => {
    // Create slug
    const slugName = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = readFileSync(
      path.join(articleFolder, filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);
    const slug = frontmatter.url + "/" + slugName;
    return {
      slug,
      frontmatter,
      content,
      filename: slugName,
    };
  });
  console.log(posts);
  res.json(posts);
});

router.get("/content/:file", (req, res) => {
  let fileName = req.params.file + ".md";
  const filePath = path.join(articleFolder, fileName);
  let fileContent = readFileSync(filePath, "utf-8");
  console.log(typeof fileContent);
  res.json({
    content: fileContent.toString(),
  });
});

router.post("/content/:file", (req, res) => {
  let fileName = req.params.file + ".md";
  console.log(fileName);
  const filePath = path.join(articleFolder, fileName);
  const { content } = req.body;
  writeFileSync(filePath, content, { encoding: "utf-8" });
  console.log(typeof fileContent);
  res.json({
    status: "Succsessss",
  });
});

router.delete("/content/:file", (req, res) => {
  let fileName = req.params.file + ".md";
  const files = readdirSync(articleFolder);
  const filePath = path.join(articleFolder, fileName);
  if (!files.includes(fileName))
    return res.json({
      msg: "No file Found",
      fileName,
    });
  unlinkSync(filePath);
  res.json({
    status: "Succsessss",
  });
});

module.exports = router;
