import { useState, useEffect } from 'react';

interface MatrixTextProps {
  text: string;
  className?: string;
  speed?: number;
}

const MatrixText = ({ text, className = '', speed = 100 }: MatrixTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        // Random characters before revealing the real character
        const iterations = 5;
        let iterationCount = 0;
        
        const scrambleInterval = setInterval(() => {
          setDisplayText(
            text.slice(0, currentIndex) +
            chars[Math.floor(Math.random() * chars.length)] +
            text.slice(currentIndex + 1)
          );
          
          iterationCount++;
          
          if (iterationCount >= iterations) {
            clearInterval(scrambleInterval);
            setDisplayText(text.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          }
        }, speed / iterations);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);
  
  return (
    <span className={`font-code ${className}`}>
      {displayText}
      <span className="animate-blink-caret">|</span>
    </span>
  );
};

export default MatrixText;