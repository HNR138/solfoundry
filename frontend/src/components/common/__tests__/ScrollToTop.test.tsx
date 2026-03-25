import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ScrollToTop from '../ScrollToTop'

describe('ScrollToTop', () => {
  beforeEach(() => {
    // Reset window.pageYOffset before each test
    Object.defineProperty(window, 'pageYOffset', {
      writable: true,
      configurable: true,
      value: 0
    })

    // Mock scrollTo
    window.scrollTo = jest.fn()

    // Clear all event listeners
    window.removeEventListener = jest.fn()
    window.addEventListener = jest.fn((event, callback) => {
      window[`_${event}`] = callback
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should not be visible when page is at top', () => {
    render(<ScrollToTop />)

    expect(screen.queryByRole('button', { name: 'Scroll to top' })).not.toBeInTheDocument()
  })

  test('should be visible when scrolled past 300px', () => {
    Object.defineProperty(window, 'pageYOffset', {
      value: 500
    })

    render(<ScrollToTop />)

    expect(screen.getByRole('button', { name: 'Scroll to top' })).toBeInTheDocument()
  })

  test('should hide when scrolled back to top', async () => {
    // Initial scroll position
    Object.defineProperty(window, 'pageYOffset', {
      value: 500
    })

    render(<ScrollToTop />)

    // Scroll back to top
    Object.defineProperty(window, 'pageYOffset', {
      value: 100
    })

    // Trigger scroll event
    window._onscroll()

    // Wait for the button to disappear
    await waitFor(() => {
      expect(screen.queryByRole('button', { name: 'Scroll to top' })).not.toBeInTheDocument()
    })
  })

  test('should scroll to top when button is clicked', async () => {
    // Scroll down
    Object.defineProperty(window, 'pageYOffset', {
      value: 500
    })

    const user = userEvent.setup()
    render(<ScrollToTop />)

    const button = screen.getByRole('button', { name: 'Scroll to top' })
    await user.click(button)

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    })
  })

  test('should have correct button style', () => {
    Object.defineProperty(window, 'pageYOffset', {
      value: 500
    })

    render(<ScrollToTop />)

    const button = screen.getByRole('button', { name: 'Scroll to top' })

    // Check button attributes
    expect(button).toHaveClass('fixed')
    expect(button).toHaveClass('bottom-6')
    expect(button).toHaveClass('right-6')
    expect(button).toHaveClass('z-50')
    expect(button).toHaveClass('flex')
    expect(button).toHaveClass('items-center')
    expect(button).toHaveClass('justify-center')
    expect(button).toHaveClass('w-12')
    expect(button).toHaveClass('h-12')
    expect(button).toHaveClass('bg-indigo-600')
    expect(button).toHaveClass('text-white')
    expect(button).toHaveClass('rounded-full')
    expect(button).toHaveClass('shadow-lg')
    expect(button).toHaveClass('transition-all')
    expect(button).toHaveClass('duration-300')
    expect(button).toHaveClass('hover:bg-indigo-700')
    expect(button).toHaveClass('cursor-pointer')

    // Check ARIA label
    expect(button).toHaveAttribute('aria-label', 'Scroll to top')
  })

  test('should use ArrowUp icon from lucide-react', () => {
    Object.defineProperty(window, 'pageYOffset', {
      value: 500
    })

    render(<ScrollToTop />)

    // Check if ArrowUp icon is rendered
    const button = screen.getByRole('button', { name: 'Scroll to top' })
    expect(button.querySelector('svg')).toBeInTheDocument()
  })
})
