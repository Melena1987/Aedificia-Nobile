import React, { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right';
  duration?: string;
  delay?: string;
  triggerOnce?: boolean;
}

const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  className = '',
  animation = 'fade-in-up',
  duration = 'duration-1000',
  delay = 'delay-200',
  triggerOnce = true,
}) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1, triggerOnce });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return isVisible ? 'opacity-100' : 'opacity-0';
      case 'fade-in-up':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
      case 'fade-in-down':
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10';
      case 'fade-in-left':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10';
      case 'fade-in-right':
        return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10';
      default:
        return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';
    }
  };
  
  const transitionClasses = `transition-all ease-out ${duration} ${delay}`;

  return (
    <div
      ref={ref}
      className={`${className} ${transitionClasses} ${getAnimationClass()}`}
    >
      {children}
    </div>
  );
};

export default ScrollRevealSection;
