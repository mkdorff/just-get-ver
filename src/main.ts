import * as core from '@actions/core';

async function run() {
  console.log(process.cwd())
  core.setOutput('version', '2.2.2')
}

run();
