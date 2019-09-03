import * as core from "@actions/core";

async function run() {
  core.setOutput("version", require(process.cwd() + "/package.json").version);
}

run();
