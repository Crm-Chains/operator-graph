# operator-graph

> Visualize any onboarded [operator-os](https://github.com/nexuschains/operator-os) as an interactive knowledge graph.

`operator-graph` is a zero-infra companion to **operator-os**. Point it at an operator's
vault — a local folder or a git URL — and it reads *that vault's own palette* and emits a
self-contained, browser-openable graph of their whole OS: every concept, swarm, agent,
skill, source, and the links between them.

```bash
# render a local operator-os checkout
operator-graph ./path/to/their-operator-os

# render straight from a git URL (shallow-cloned to a temp dir)
operator-graph https://github.com/someone/their-operator-os.git

# serve it locally / over LAN with auto-rebuild
operator-graph ./their-operator-os --serve
```

It writes `graph.html` — open it in any browser. No build step, no account, no server
required.

## Why it's a companion, not a fork

operator-graph does **not** hardcode any colors. It reads the target vault's own
`.obsidian/graph.json` `colorGroups` — the `file:"Prefix - "`, `path:"…"`, and
`tag:#orphan` queries standardized by operator-os's `graph-visuals.md` schema — and applies
them. So whatever taxonomy an operator onboarded (agency, algo-trading, research, anything)
renders in their own same-family palette.

**operator-os defines the palette. operator-graph visualizes it.**

## How it works

1. **Locate the vault** — resolve a local path or shallow-clone a git URL; find the vault
   root (`.obsidian/` or `wiki/schema/graph-visuals.md`).
2. **Load the palette** — parse `colorGroups` from `.obsidian/graph.json`; interpret the
   `file:` / `path:` / `tag:` (+ `OR`) queries into a node-color matcher. Falls back to a
   neutral default if no palette is present.
3. **Scan** — walk the pages, extract `[[wikilinks]]`, build nodes and edges, compute
   orphans and node degree.
4. **Render** — emit a self-contained [vis-network](https://visjs.github.io/vis-network/)
   HTML with search, a legend, and a node detail panel.

## Privacy

The tool is open source, but a rendered vault can contain private or client data. This repo
**never** commits rendered output or scanned vaults — `.gitignore` excludes them. Only the
engine and a small synthetic demo vault ship here. Render your real OS locally; share the
HTML deliberately, not by committing it.

## Status

🚧 **Early development.** The repository scaffold and design are in place; the rendering
engine is being built out from the proven generator in the operator-os ecosystem. The CLI
currently prints usage and reports that the engine is not yet wired. Track progress in
[`docs/`](docs/).

## Roadmap (v1)

- [ ] Vault location (local path + git-URL clone)
- [ ] Palette loader (read `.obsidian/graph.json` colorGroups + query interpreter)
- [ ] Scanner (wikilinks → nodes/edges, orphans, degree)
- [ ] Self-contained HTML renderer
- [ ] `--serve` local/LAN server with auto-rebuild

Out of scope for v1: hosted service, auth/OAuth, multi-user accounts.

## License

[MIT](LICENSE)
