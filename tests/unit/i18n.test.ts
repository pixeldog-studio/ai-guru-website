import { describe, it, expect } from 'vitest';
import {
  getLangFromUrl,
  useTranslations,
  getLocalizedPath,
  getAlternateLang,
  getAlternatePath,
  formatDate,
} from '../../src/i18n/utils';

describe('getLangFromUrl', () => {
  it('returns "en" for root URL', () => {
    expect(getLangFromUrl(new URL('https://example.com/'))).toBe('en');
  });

  it('returns "de" for /de/ URL', () => {
    expect(getLangFromUrl(new URL('https://example.com/de/blog'))).toBe('de');
  });

  it('returns "en" for English pages', () => {
    expect(getLangFromUrl(new URL('https://example.com/blog'))).toBe('en');
  });

  it('returns "en" for unknown paths', () => {
    expect(getLangFromUrl(new URL('https://example.com/fr/page'))).toBe('en');
  });
});

describe('useTranslations', () => {
  it('returns English translations for "en"', () => {
    const t = useTranslations('en');
    expect(t('nav.home')).toBe('Home');
    expect(t('cta.startChatting')).toBe('Start chatting');
  });

  it('returns German translations for "de"', () => {
    const t = useTranslations('de');
    expect(t('nav.home')).toBe('Startseite');
    expect(t('cta.startChatting')).toBe('Jetzt chatten');
  });
});

describe('getLocalizedPath', () => {
  it('returns path as-is for English (default locale)', () => {
    expect(getLocalizedPath('/', 'en')).toBe('/');
    expect(getLocalizedPath('/blog', 'en')).toBe('/blog');
  });

  it('adds /de prefix for German', () => {
    expect(getLocalizedPath('/', 'de')).toBe('/de/');
    expect(getLocalizedPath('/blog', 'de')).toBe('/de/blog');
  });
});

describe('getAlternateLang', () => {
  it('returns "de" for "en"', () => {
    expect(getAlternateLang('en')).toBe('de');
  });

  it('returns "en" for "de"', () => {
    expect(getAlternateLang('de')).toBe('en');
  });
});

describe('getAlternatePath', () => {
  it('converts EN root to DE root', () => {
    expect(getAlternatePath('/', 'en')).toBe('/de');
  });

  it('converts EN path to DE path', () => {
    expect(getAlternatePath('/blog', 'en')).toBe('/de/blog');
  });

  it('converts DE root to EN root', () => {
    expect(getAlternatePath('/de', 'de')).toBe('/');
  });

  it('converts DE path to EN path', () => {
    expect(getAlternatePath('/de/blog', 'de')).toBe('/blog');
  });
});

describe('formatDate', () => {
  const date = new Date('2026-01-15');

  it('formats date in English', () => {
    const formatted = formatDate(date, 'en');
    expect(formatted).toContain('January');
    expect(formatted).toContain('15');
    expect(formatted).toContain('2026');
  });

  it('formats date in German', () => {
    const formatted = formatDate(date, 'de');
    expect(formatted).toContain('Januar');
    expect(formatted).toContain('15');
    expect(formatted).toContain('2026');
  });
});
