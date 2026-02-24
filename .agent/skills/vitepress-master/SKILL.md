---
name: vitepress-master
description: Orchestrates VitePress documentation lifecycle: structural sync, content generation, and quality audit.
---

# VitePress Master

A GEP-compliant skill for AI agents to manage VitePress documentation projects as an automated "Editor-in-Chief".

## Core Actions

### 1. sync
Synchronizes the `.vitepress/config.ts` (or `.js`) sidebar with the actual filesystem structure.
```bash
node skills/vitepress-master/index.js --action sync
```

### 2. create
Scaffolds a new document with standardized frontmatter and layout.
```bash
node skills/vitepress-master/index.js --action create --title "My Doc" --path "guide/intro.md"
```

### 3. audit
Performs quality checks (broken links, build simulation).
```bash
node skills/vitepress-master/index.js --action audit
```

## Implementation Notes
- **Target Dir**: Default assumes a `docs/` folder in the current workspace.
- **Orchestration**: Automatically triggers `sync` after a successful `create`.
