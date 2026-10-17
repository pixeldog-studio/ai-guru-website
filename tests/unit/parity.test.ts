import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { translations } from '../../src/i18n/translations';

// Every user-facing surface ships in EN and DE. These checks fail fast when one
// side is added, renamed, or deleted without the other.

const root = join(import.meta.dirname, '../..');

function listFiles(dir: string, exclude: string[] = []): string[] {
  return readdirSync(dir, { withFileTypes: true, recursive: true })
    .filter((entry) => entry.isFile())
    .map((entry) => relative(dir, join(entry.parentPath, entry.name)))
    .filter((file) => !exclude.some((prefix) => file.startsWith(prefix)))
    .sort();
}

describe('EN/DE parity', () => {
  it('translations define the same keys in both languages', () => {
    const enKeys = Object.keys(translations.en).sort();
    const deKeys = Object.keys(translations.de).sort();
    expect(deKeys).toEqual(enKeys);
  });

  it('translations have no empty values', () => {
    for (const [lang, dict] of Object.entries(translations)) {
      for (const [key, value] of Object.entries(dict)) {
        expect(value.trim(), `${lang}.${key}`).not.toBe('');
      }
    }
  });

  it('every EN page has a DE counterpart under src/pages/de', () => {
    const pagesDir = join(root, 'src/pages');
    const enPages = listFiles(pagesDir, ['de/']);
    const dePages = listFiles(join(pagesDir, 'de'));
    expect(dePages).toEqual(enPages);
  });

  it('every EN blog post has a DE counterpart with the same filename', () => {
    const blogDir = join(root, 'src/data/blog');
    expect(listFiles(join(blogDir, 'de'))).toEqual(listFiles(join(blogDir, 'en')));
  });

  it('blog frontmatter declares its folder language and filename as translationSlug', () => {
    const blogDir = join(root, 'src/data/blog');
    for (const lang of ['en', 'de']) {
      for (const file of listFiles(join(blogDir, lang))) {
        const source = readFileSync(join(blogDir, lang, file), 'utf8');
        const frontmatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
        const field = (name: string) => frontmatter.match(new RegExp(`^${name}:\\s*["']?([^"'\\n]+)`, 'm'))?.[1].trim();
        expect(field('lang'), `${lang}/${file} lang`).toBe(lang);
        expect(field('translationSlug'), `${lang}/${file} translationSlug`).toBe(file.replace(/\.md$/, ''));
      }
    }
  });
});
