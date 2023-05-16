/* eslint-disable no-console */
import { execSync } from "child_process";

(async () => {
  try {
    execSync("git checkout --orphan gh-pages");
  } catch (e) {
    execSync("git checkout gh-pages");
  }
  try {
    console.log("Building started...");
    execSync("npm run build");
    const folderName = "dist";
    execSync(`git --work-tree ${folderName} add --all`);
    execSync(`git --work-tree ${folderName} commit -m "gh-pages"`);
    console.log("Pushing to gh-pages...");
    execSync("git push origin HEAD:gh-pages --force");
    execSync(`rm -r ${folderName}`);
    execSync("git checkout -f main");
    execSync("git branch -D gh-pages");
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
})();