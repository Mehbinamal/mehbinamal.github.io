# Portfolio Style Guide

## Design System Overview

This portfolio website follows a modern, tech-savvy design philosophy with glassmorphism effects, smooth animations, and a cohesive color palette optimized for dark mode.

---

## Color Palette

### Primary Colors
- **Primary (Cyan-Blue)**: `hsl(201, 96%, 50%)` - Used for main actions, links, and accents
- **Secondary (Purple)**: `hsl(262, 83%, 58%)` - Used for secondary accents and gradients
- **Gradients**: Primary to Secondary creates dynamic visual interest

### Neutral Colors
- **Background**: `hsl(222, 47%, 11%)` (Dark) / `hsl(0, 0%, 100%)` (Light)
- **Foreground**: `hsl(213, 31%, 91%)` (Dark) / `hsl(222, 47%, 11%)` (Light)
- **Muted**: `hsl(217, 33%, 17%)` (Dark) / `hsl(210, 40%, 96%)` (Light)

### Semantic Colors
- **Success/Accent**: Primary color variants
- **Destructive**: `hsl(0, 63%, 50%)` (Dark) / `hsl(0, 85%, 60%)` (Light)
- **Border**: `hsl(217, 33%, 17%)` (Dark) / `hsl(214, 32%, 91%)` (Light)

### Glassmorphism Variables
- **Glass Background**: `rgba(0, 0, 0, 0.2)` (Dark) / `rgba(255, 255, 255, 0.1)` (Light)
- **Glass Border**: `rgba(255, 255, 255, 0.1)` (Dark) / `rgba(255, 255, 255, 0.2)` (Light)
- **Backdrop Blur**: 10px (standard) / 20px (strong)

---

## Typography

### Font Families
- **Primary (Sans-serif)**: `Inter` - Used for body text and UI elements
  - Weights: 300, 400, 500, 600, 700, 800, 900
- **Display (Headings)**: `Space Grotesk` - Used for headings and emphasis
  - Weights: 300, 400, 500, 600, 700
  - Letter spacing: -0.02em for headings

### Type Scale
- **H1**: 5xl (3rem) / 7xl (4.5rem) / 8xl (6rem) - Hero titles
- **H2**: 4xl (2.25rem) / 5xl (3rem) / 6xl (3.75rem) - Section headings
- **H3**: 2xl (1.5rem) - Subsection headings
- **Body**: Base (1rem) / lg (1.125rem) / xl (1.25rem)
- **Small**: sm (0.875rem) / xs (0.75rem)

### Text Styles
- **Gradient Text**: Applied to hero name and key headings using `gradient-text` class
- **Line Height**: Relaxed (1.75) for body text, tight (1.2) for headings

---

## Spacing System

Based on Tailwind's spacing scale (4px base unit):
- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)
- **2xl**: 4rem (64px)

### Section Spacing
- **Section Padding**: `py-20 md:py-32` (80px / 128px)
- **Container Padding**: `px-4` (16px)
- **Card Padding**: `p-6` to `p-8` (24px to 32px)

---

## Components

### Buttons

#### Primary Button
```tsx
<Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50">
  Button Text
</Button>
```

#### Outline Button
```tsx
<Button variant="outline" className="glass hover:bg-primary/10 border-primary/20">
  Button Text
</Button>
```

#### Ghost Button
```tsx
<Button variant="ghost" className="hover:bg-primary/10">
  Button Text
</Button>
```

### Cards

#### Standard Card
```tsx
<Card className="glass-strong border-primary/10 hover:border-primary/30">
  {/* Content */}
</Card>
```

#### 3D Hover Card
```tsx
<Card className="card-3d glass-strong">
  {/* Content */}
</Card>
```

### Badges
```tsx
<Badge className="glass border-primary/10 hover:border-primary/30">
  Badge Text
</Badge>
```

---

## Effects & Animations

### Glassmorphism
- **Standard**: `.glass` - 10px blur, subtle background
- **Strong**: `.glass-strong` - 20px blur, stronger background

### Animations
- **Fade In**: `animate-fade-in` - 0.5s ease-out
- **Fade In Up**: `animate-fade-in-up` - 0.6s ease-out
- **Float**: `animate-float` - 6s ease-in-out infinite
- **Pulse Glow**: `pulse-glow` - 2s ease-in-out infinite
- **Gradient Shift**: `gradient-shift` - 3s ease infinite

### Animation Delays
- Use `animate-delay-{100-600}` classes for staggered animations
- Typical pattern: 100ms increments per item

---

## Layout Patterns

### Hero Section
- Full viewport height (`min-h-screen`)
- Centered content with grid layout
- Animated background with floating gradient orbs
- Large, bold typography with gradient text

### Section Layout
- Centered container with max-width
- Section heading with underline accent
- Content grid: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)

### Navigation
- Sticky header with glassmorphic background
- Active state indicators
- Smooth scroll behavior
- Mobile-responsive hamburger menu

---

## Accessibility

### WCAG Compliance
- **Color Contrast**: All text meets WCAG AA standards (4.5:1 minimum)
- **Focus States**: Visible focus indicators on all interactive elements
- **ARIA Labels**: All icons and interactive elements have descriptive labels
- **Keyboard Navigation**: Full keyboard accessibility throughout
- **Semantic HTML**: Proper use of semantic elements (header, nav, main, section, footer)

### Best Practices
- Use `aria-label` for icon-only buttons
- Use `aria-current="page"` for active navigation items
- Provide alt text for all images
- Use proper heading hierarchy (h1 → h2 → h3)

---

## Responsive Breakpoints

- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: > 1024px (lg)
- **Large Desktop**: > 1280px (xl)

### Mobile-First Approach
- Base styles target mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interactive elements (min 44x44px)

---

## Performance Optimizations

### Image Loading
- Use `loading="lazy"` for below-the-fold images
- Use `loading="eager"` for hero images
- Optimize images before upload

### Animation Performance
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly

### Code Splitting
- React Router for route-based code splitting
- Lazy load components when possible

---

## Iconography

### Icon Library
- **Lucide React**: Primary icon library
- **SVG Icons**: Custom SVG icons for social media

### Icon Sizes
- **Small**: 16px (w-4 h-4)
- **Medium**: 20px (w-5 h-5)
- **Large**: 24px (w-6 h-6)

### Icon Usage
- Always include `aria-label` for accessibility
- Use consistent stroke width (2px)
- Match icon color to text color context

---

## Utilities

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(to right, primary, secondary, primary);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Animated Background
```css
.animated-bg {
  background: linear-gradient(135deg, primary/10, secondary/10, primary/10);
  background-size: 200% 200%;
  animation: gradient-flow 15s ease infinite;
}
```

### 3D Card Effect
```css
.card-3d {
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.card-3d:hover {
  transform: translateY(-8px) rotateX(2deg);
}
```

---

## Frameworks & Libraries

### Core Stack
- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool
- **TailwindCSS**: Utility-first CSS framework
- **shadcn/ui**: Component library

### Key Dependencies
- **React Router**: Navigation
- **Lucide React**: Icons
- **Framer Motion** (optional): Advanced animations
- **React Hook Form**: Form handling
- **Zod**: Schema validation

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced experience with JavaScript enabled
- Graceful degradation for older browsers

---

## Maintenance

### Code Organization
- Components in `/src/components`
- Pages in `/src/pages`
- Styles in `/src/index.css`
- Utilities in `/src/lib`

### Naming Conventions
- Components: PascalCase (`Hero.tsx`)
- Files: kebab-case for utilities (`use-mobile.tsx`)
- CSS Classes: kebab-case with Tailwind utilities

### Version Control
- Semantic versioning
- Clear commit messages
- Feature branches

---

## Future Enhancements

### Potential Additions
- Dark/Light mode toggle
- Advanced animations with Framer Motion
- Blog section
- Project detail pages
- Multi-language support
- Analytics integration

---

*Last Updated: 2024*

