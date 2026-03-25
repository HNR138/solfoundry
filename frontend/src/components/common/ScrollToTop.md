# ScrollToTop Component

A scroll-to-top button component that appears when the user scrolls down the page.

## Features

- **Auto-hide**: Button automatically hides when at the top of the page
- **Auto-show**: Button automatically appears after scrolling past 300px
- **Smooth scroll**: Clicking the button smoothly scrolls back to the top
- **Responsive design**: Fixed position with proper z-index to stay on top
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## Installation

Import the component:

```tsx
import ScrollToTop from '@/components/common/ScrollToTop'
```

## Usage

### In Root Layout (Recommended)

Add the component to your root layout to ensure it's always available:

```tsx
import ScrollToTop from '@/components/common/ScrollToTop'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
```

### In Specific Pages

Add it to any page that needs a scroll-to-top button:

```tsx
import ScrollToTop from '@/components/common/ScrollToTop'

export default function MyPage() {
  return (
    <>
      <main>
        {/* Your page content */}
        <div style={{ height: '2000px' }}>
          <p>Scroll down to see the button</p>
        </div>
      </main>
      <ScrollToTop />
    </>
  )
}
```

## Props

This component does not accept any props.

## Styling

The component uses Tailwind CSS for styling:

- **Position**: Fixed at bottom-right (`fixed bottom-6 right-6`)
- **Z-index**: 50 to stay above other content
- **Size**: 48x48 pixels (w-12 h-12)
- **Style**: Indigo background with white icon
- **Hover effect**: Slightly darker indigo on hover
- **Animation**: Smooth transition (300ms)

## Testing

Run the tests:

```bash
npm test
```

Or run tests for this specific component:

```bash
npm test -- ScrollToTop.test.tsx
```

## Accessibility

- **ARIA Label**: "Scroll to top" for screen readers
- **Keyboard Navigation**: Fully keyboard accessible
- **Focus Management**: Proper focus styles for keyboard users
- **Semantic HTML**: Uses semantic button element

## License

MIT

## Author

Created as part of the SolFoundry project.

---

**Version**: 1.0.0
**Last Updated**: 2026-03-24
