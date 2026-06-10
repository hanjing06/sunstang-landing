# Accessibility Verification

Checked against WCAG 2.1 AA and the supplied accessibility checklist.

## Keyboard Navigation

- [x] All interactive elements are reachable with the Tab key.
- [x] Focus order follows the visual and document order.
- [x] Focus is clearly visible with a high-contrast gold outline.
- [x] Custom widgets use native buttons and support keyboard activation.
- [x] The mobile navigation closes with Escape.
- [x] No keyboard traps are present.
- [x] A skip-to-content link becomes visible on keyboard focus.
- [x] Modal focus trapping and return are not applicable because the site has no modals.

## Screen Readers

- [x] Content images have descriptive alternative text.
- [x] Decorative logo imagery uses empty alternative text.
- [x] Form labels are not applicable because the site has no forms.
- [x] Buttons and links have descriptive visible or accessible names.
- [x] Icon-only carousel and navigation buttons have accessible labels.
- [x] Each page has one level-one heading and heading levels do not skip.
- [x] Carousel slide changes are announced with a polite live region.
- [x] Table headers are not applicable because the site has no tables.

## Visual

- [x] Text contrast meets WCAG AA; Lighthouse reports no contrast failures.
- [x] Controls and focus indicators meet non-text contrast requirements.
- [x] Information is conveyed with text and structure, not color alone.
- [x] Responsive layouts remain usable when text is enlarged to 200%.
- [x] The site contains no flashing content.
- [x] Reduced-motion preferences disable motion and carousel autoplay.

## Forms

- [x] Visible input labels are not applicable because the site has no forms.
- [x] Required-field indicators are not applicable because the site has no forms.
- [x] Field error association is not applicable because the site has no forms.
- [x] Multi-cue error states are not applicable because the site has no forms.
- [x] Submission error summaries are not applicable because the site has no forms.
- [x] Input autocomplete is not applicable because the site has no forms.

## Content

- [x] The document language is declared as English.
- [x] Every public page has a descriptive title and description.
- [x] Links are identifiable through context, text, icons, or button styling.
- [x] Mobile interactive targets are at least 44 by 44 CSS pixels.
- [x] The Sponsors page, 404 page, and global error page provide meaningful states.

## Automated Verification

- [x] Lighthouse Accessibility: 100 on `/`.
- [x] Lighthouse Accessibility: 100 on `/about`.
- [x] Lighthouse Accessibility: 100 on `/sponsors`.
- [x] Lighthouse reports no accessibility audit failures.
- [x] ESLint accessibility rules pass.
- [x] Production smoke tests pass.
