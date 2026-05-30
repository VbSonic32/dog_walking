---
name: Kindred Paws
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#424841'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#727971'
  outline-variant: '#c2c8bf'
  surface-tint: '#456648'
  primary: '#426446'
  on-primary: '#ffffff'
  primary-container: '#5a7d5d'
  on-primary-container: '#f7fff2'
  inverse-primary: '#abd0ab'
  secondary: '#536160'
  on-secondary: '#ffffff'
  secondary-container: '#d4e3e1'
  on-secondary-container: '#576564'
  tertiary: '#735802'
  on-tertiary: '#ffffff'
  tertiary-container: '#8e711f'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6ecc6'
  primary-fixed-dim: '#abd0ab'
  on-primary-fixed: '#01210a'
  on-primary-fixed-variant: '#2d4e32'
  secondary-fixed: '#d7e6e4'
  secondary-fixed-dim: '#bbcac8'
  on-secondary-fixed: '#111e1d'
  on-secondary-fixed-variant: '#3c4948'
  tertiary-fixed: '#ffdf96'
  tertiary-fixed-dim: '#e7c268'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4400'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  headline-xl:
    fontFamily: Literata
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1120px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system is built to evoke the serene, reliable, and warm experience of a trusted local dog walker. The target audience includes busy professionals and elderly pet owners who view their dogs as family members and seek peace of mind.

The design style is a blend of **Minimalism** and **Modern Corporate**, softened by organic touches. It prioritizes heavy whitespace to reduce cognitive load and uses a limited palette of natural tones to ground the user experience. The interface should feel like a "breath of fresh air"—uncluttered, stable, and deeply caring. Every interaction should reinforce a sense of safety and professional calm.

## Colors

The palette is rooted in the natural world to reflect outdoor walks and domestic comfort.

- **Primary (Sage Green):** Used for main actions, active states, and brand-heavy elements. It represents growth, health, and tranquility.
- **Secondary (Soft Sky):** A gentle blue used for backgrounds, subtle accents, and secondary containers to provide a cooling effect.
- **Tertiary (Warm Sand):** A soft gold used sparingly for highlights, "golden hour" moments, or important notices that need a gentle nudge of attention.
- **Neutral (Warm Cream):** The foundation of the UI. Avoid pure white (#FFFFFF) in favor of this cream to reduce eye strain and maintain a cozy, approachable feel.
- **Text (Charcoal Forest):** A very dark green-grey (#2D3436) is used for text to ensure high legibility while remaining softer than pure black.

## Typography

The typographic scale balances the intellectual reliability of a serif with the modern friendliness of a geometric sans-serif.

- **Headings:** Literata provides a scholarly yet warm "bookish" feel. Its soft serifs and organic curves suggest a classic, high-end service.
- **Body & UI:** Plus Jakarta Sans is used for its exceptional legibility and soft, rounded terminals. It keeps the functional parts of the interface feeling optimistic and accessible.
- **Hierarchy:** Use ample vertical rhythm. Large headlines should use negative letter-spacing slightly to appear more cohesive, while small labels benefit from slight tracking to ensure clarity on mobile devices.

## Layout & Spacing

This design system utilizes a **Fixed Grid** for desktop and a **Fluid Grid** for mobile devices.

- **Desktop:** A 12-column centered layout with a 1120px max-width. Gutters are kept wide (24px) to allow the content to breathe.
- **Mobile:** A 4-column fluid layout with 16px side margins. 
- **Spacing Logic:** Based on an 8px base unit. Component internal padding should favor "airy" proportions (e.g., 16px or 24px) rather than cramped spacing to maintain the "calm" brand pillar. 
- **Sectioning:** Vertical sections should be separated by large gaps (80px to 120px on desktop) to clearly demarcate different phases of the user journey (e.g., "Our Services" vs "Meet the Walker").

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. 

- **Surface Strategy:** The lowest layer is the Warm Cream neutral. Content cards sit on top of this in pure white or the Soft Sky secondary color.
- **Shadows:** Avoid harsh, black shadows. Use extremely diffused, low-opacity shadows tinted with the primary green (#6B8E6D at 8-10% opacity). This creates a "lifted" effect that feels natural, like sunlight hitting a physical object.
- **Outlines:** For interactive elements like input fields, use soft 1px borders in a darker shade of the secondary blue rather than heavy shadows to keep the interface feeling light and "pencil-drawn."

## Shapes

The shape language is consistently **Rounded**. 

Sharp corners are avoided entirely to prevent the UI from feeling "pointy" or aggressive. Containers, buttons, and image masks use a base 0.5rem (8px) radius. For high-interaction elements like call-to-action buttons or featured "Pet Profile" cards, use the `rounded-xl` (1.5rem) setting to emphasize softness and friendliness. Images of dogs should ideally be clipped into soft squarcles or use very high corner radii to match the UI.

## Components

- **Buttons:** Primary buttons are Sage Green with white text, featuring `rounded-xl` corners. Secondary buttons use a Sage Green outline with a transparent background.
- **Cards:** Cards should have a white background, a 1px Soft Sky border, and a soft primary-tinted shadow. Use internal padding of 24px to ensure content doesn't feel squeezed.
- **Input Fields:** Use the Warm Cream neutral for the background and a Soft Sky border. On focus, the border transitions to Sage Green.
- **Chips/Tags:** Used for "Service Types" (e.g., "30-min walk," "Puppy Visit"). These should be pill-shaped with a light Secondary Sky background and Primary Green text.
- **Lists:** Use custom iconography for list bullets—specifically, small, stylized paw prints or organic leaf shapes in Sage Green.
- **Progress Indicators:** For booking flows, use a soft horizontal stepper with rounded nodes and a Tertiary Gold accent for the current step to signify warmth and progress.
- **Signature Component - "The Pawsome Map":** A specialized tracking component for dog walks featuring a soft-styled map with a Sage Green path and a custom icon for the dog's current location.