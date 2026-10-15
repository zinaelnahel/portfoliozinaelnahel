# Accessibility checks

The local redesign was checked against WCAG 2.2 A/AA criteria using axe-core
and browser interaction checks. These checks cover this portfolio, not the
external demo sites linked from project cards.

## Checked

- No automated violations in the selected gallery, expanded gallery, either
  category filter, open/closed mobile navigation, and the 320px mobile layout.
- Keyboard-only navigation, the skip link, visible focus indicators, and a
  logical focus order.
- Escape closes mobile navigation and restores focus to its button. Choosing
  a section moves focus to that section without the sticky header covering it.
- Project filters expose pressed states; the gallery announces its result count.
- External links have descriptive names and announce when they open a new tab.
- Native links and buttons, semantic headings, photo alternatives, and decorative
  artwork hidden from assistive technology.
- Text contrast, responsive layouts at 320px, 390px, 768px and 1440px, 200% text
  enlargement, and WCAG text-spacing settings without horizontal overflow.
- Reduced-motion preferences and Windows forced-colour mode.
- Seven React interaction tests pass, including keyboard focus and bootcamp dates.

The original warm palette was adjusted where small text did not have sufficient
contrast. Larger touch targets and visible keyboard outlines preserve the
personal visual design.

## Scope

Automated results and browser checks do not establish full WCAG conformance.
The site has not yet been manually tested using NVDA, VoiceOver, or a physical
assistive device. Those checks remain useful before final public release.

References:

- [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [WAI disclosure navigation pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)
