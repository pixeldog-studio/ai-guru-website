import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import CTASection from '../../src/components/CTASection.astro';
import EmailSignup from '../../src/components/EmailSignup.astro';
import { kitFormAction } from '../../src/lib/kit';

// "No form ID" cases must not depend on the caller's environment.
beforeEach(() => vi.stubEnv('PUBLIC_KIT_FORM_ID', ''));
afterEach(() => vi.unstubAllEnvs());

describe('kitFormAction', () => {
  it('returns null without a real form ID', () => {
    expect(kitFormAction(undefined)).toBeNull();
    expect(kitFormAction('')).toBeNull();
    expect(kitFormAction('   ')).toBeNull();
    expect(kitFormAction('YOUR_FORM_ID')).toBeNull();
  });

  it('builds the Kit subscription URL from a numeric ID', () => {
    expect(kitFormAction(' 1234567 ')).toBe('https://app.kit.com/forms/1234567/subscriptions');
  });
});

describe.each([
  ['EmailSignup', EmailSignup],
  ['CTASection', CTASection],
])('%s email form', (_name, Component) => {
  let container: AstroContainer;
  beforeAll(async () => {
    container = await AstroContainer.create();
  });

  it('is not rendered without a form ID', async () => {
    const html = await container.renderToString(Component, { props: { lang: 'en' } });
    expect(html).not.toContain('<form');
    expect(html).not.toContain('YOUR_FORM_ID');
  });

  it('renders with a configured form ID', async () => {
    const html = await container.renderToString(Component, {
      props: { lang: 'de', formId: '1234567' },
    });
    expect(html).toContain('action="https://app.kit.com/forms/1234567/subscriptions"');
    expect(html).toContain('name="email_address"');
  });
});
