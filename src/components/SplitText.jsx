import { motion } from 'framer-motion';

const SplitText = ({
    text,
    className = '',
    delay = 50, // Delay per word (in ms)
    animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
    animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
    threshold = 0.1,
    rootMargin = '-50px',
    textAlign = 'left'
}) => {
    const words = text.split(' ').map(word => word + '\u00A0');

    return (
        <p
            className={`split-text ${className}`}
            style={{ textAlign, overflow: 'hidden', display: 'inline-block' }}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={animationFrom}
                    whileInView={animationTo}
                    viewport={{ once: true, amount: threshold, margin: rootMargin }}
                    transition={{
                        ease: 'easeOut',
                        duration: 0.5,
                        delay: i * (delay / 1000), // Convert ms to seconds
                    }}
                    style={{ display: 'inline-block', willChange: 'transform, opacity' }}
                >
                    {word}
                </motion.span>
            ))}
        </p>
    );
};

export default SplitText;
