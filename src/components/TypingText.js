import { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [typedText, setTypedText] = useState('');
  const originalText = `I'm a fullstack developer skilled in building highly functional web apps,
             I bring a robust background in programming with expertise in Python 
             and JavaScript, API design particularly in Node.js and Express.js for web development.`;

  useEffect(() => {
    const typingEffect = () => {
      for (let i = 0; i <= originalText.length; i++) {
        setTimeout(() => {
          setTypedText(originalText.slice(0, i));
        }, 50 * i);
      }
    };

    typingEffect();

    // Clean up to prevent memory leaks
    return () => clearTimeout(typingEffect);
  }, []);

  return (
    <p className="!text-2xl !text-left xl:!text-2xl lg:!text-center lg:!text-2xl md:!text-2xl sm:!text-2xl">
      {typedText}
    </p>
  );
};

export default TypingAnimation;
