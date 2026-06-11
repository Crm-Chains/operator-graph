#!/usr/bin/env node
// operator-graph CLI entry point.
//
// SCAFFOLD: the rendering engine is not yet wired. This stub prints usage and
// exits so the published bin is honest and never crashes. The engine
// (vault location -> palette load -> scan -> render/serve) is built out in
// src/ per docs/. See the roadmap in README.md.

const argv = process.argv.slice(2);

const USAGE = `operator-graph — visualize an onboarded operator-os as a knowledge graph

Usage:
  operator-graph <path-or-git-url>          Render a vault to graph.html
  operator-graph <path-or-git-url> --serve  Render and serve locally / over LAN

Examples:
  operator-graph ./their-operator-os
  operator-graph https://github.com/someone/their-operator-os.git
  operator-graph ./their-operator-os --serve

Status: early development — the rendering engine is not yet implemented.
Track progress: https://github.com/nexuschains/operator-graph`;

if (argv.length === 0 || argv.includes("-h") || argv.includes("--help")) {
  console.log(USAGE);
  process.exit(0);
}

console.error(
  "operator-graph: the rendering engine is not yet implemented in this scaffold.\n" +
    "Run `operator-graph --help` for planned usage, or follow the roadmap in README.md."
);
process.exit(1);
