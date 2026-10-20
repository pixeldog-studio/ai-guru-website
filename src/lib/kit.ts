/**
 * Kit (ConvertKit) form action URL, or null when no real form ID is configured.
 * Set PUBLIC_KIT_FORM_ID at build time to render the email signup forms.
 * Kit form IDs are numeric, so placeholders like "YOUR_FORM_ID" are rejected.
 */
export function kitFormAction(
  formId: string | undefined = import.meta.env.PUBLIC_KIT_FORM_ID,
): string | null {
  const id = formId?.trim();
  if (!id || !/^\d+$/.test(id)) return null;
  return `https://app.kit.com/forms/${id}/subscriptions`;
}
