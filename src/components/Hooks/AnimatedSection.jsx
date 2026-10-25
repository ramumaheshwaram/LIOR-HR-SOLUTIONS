import { ScrollAnimation } from './ScrollAnimation'; // Adjust path if needed

export function AnimatedSection({ children, className = "" }) {
  const [ref, isVisible] = ScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1500 ease-out ${isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-12' // Starts lower down and fades up slowly
        } ${className}`}
    >
      {children}
    </div>
  );
}