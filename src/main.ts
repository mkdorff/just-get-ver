import * as core from "@actions/core";

async function run() {
  console.log(require(process.cwd() + "/package.json"));
  core.setOutput("version", require(process.cwd() + "/package.json").versions);
}

run();
