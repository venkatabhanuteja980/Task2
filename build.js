import nunjucks from "nunjucks";
import fs from "fs";
import path from "path";

const env = nunjucks.configure("src/templates", {
  autoescape: true,
});

const html = env.render("index.njk");

const distPath = path.resolve("dist");
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath);
}

fs.writeFileSync(path.join(distPath, "index.html"), html);
console.log("Nunjucks → HTML rendered");
