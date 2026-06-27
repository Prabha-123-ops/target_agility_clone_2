import type { Plugin } from 'vite';

export function componentTagger(): Plugin {
  return {
    name: 'component-tagger',
    // No-op plugin to preserve build behavior without external dependency
  } as Plugin;
}
