import { useState } from 'react';

const darkenColor = (hex, percent) => {
    let color = hex.startsWith('#') ? hex.slice(1) : hex;
    if (color.length === 3) {
        color = color
            .split('')
            .map(c => c + c)
            .join('');
    }
    const num = parseInt(color, 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;
    r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '' }) => {
    const maxItems = 5;
    const papers = items.slice(0, maxItems); // Take up to 5 items, no loop/padding!

    const [open, setOpen] = useState(false);
    const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

    const folderBackColor = darkenColor(color, 0.08);

    // Dark mode paper colors (from back to front)
    const paperColors = ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af']; // Gray-800 to Gray-400

    const handleClick = () => {
        setOpen(prev => !prev);
        if (open) {
            setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
        }
    };

    const handlePaperMouseMove = (e, index) => {
        if (!open) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const offsetX = (e.clientX - centerX) * 0.15;
        const offsetY = (e.clientY - centerY) * 0.15;
        setPaperOffsets(prev => {
            const newOffsets = [...prev];
            newOffsets[index] = { x: offsetX, y: offsetY };
            return newOffsets;
        });
    };

    const handlePaperMouseLeave = (e, index) => {
        setPaperOffsets(prev => {
            const newOffsets = [...prev];
            newOffsets[index] = { x: 0, y: 0 };
            return newOffsets;
        });
    };

    const folderStyle = {
        '--folder-color': color,
        '--folder-back-color': folderBackColor,
    };

    const scaleStyle = { transform: `scale(${size})` };

    const getOpenTransform = (index, total) => {
        if (total <= 1) return 'translate(0%, -90%) rotate(0deg)';

        const centerIndex = (total - 1) / 2;
        const dist = index - centerIndex;

        const x = dist * 60; // Spread x
        const y = -100 + Math.abs(dist) * 15; // Arc y (center higher)
        const rot = dist * 10; // Fanning rotation

        return `translate(${x}%, ${y}%) rotate(${rot}deg)`;
    };

    return (
        <div style={scaleStyle} className={className}>
            <div
                className={`group relative transition-all duration-200 ease-in cursor-pointer ${!open ? 'hover:-translate-y-2' : ''
                    }`}
                style={{
                    ...folderStyle,
                    transform: open ? 'translateY(-8px)' : undefined
                }}
                onClick={handleClick}
            >
                <div
                    className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
                    style={{ backgroundColor: folderBackColor }}
                >
                    <span
                        className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
                        style={{ backgroundColor: folderBackColor }}
                    ></span>
                    {papers.map((item, i) => {
                        // Sizing hierarchy
                        const wPercent = 70 + (i * 5);
                        const hPercent = 80;

                        const offsetX = paperOffsets[i]?.x || 0;
                        const offsetY = paperOffsets[i]?.y || 0;

                        const transformStyle = open
                            ? `${getOpenTransform(i, papers.length)} translate(${offsetX}px, ${offsetY}px)`
                            : undefined;

                        return (
                            <div
                                key={i}
                                onMouseMove={e => handlePaperMouseMove(e, i)}
                                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out ${!open ? 'transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0' : 'hover:scale-110'
                                    }`}
                                style={{
                                    width: `${wPercent}%`,
                                    height: `${hPercent}%`,
                                    ...(!open ? {} : { transform: transformStyle }),
                                    backgroundColor: paperColors[i],
                                    borderRadius: '10px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                {item}
                            </div>
                        );
                    })}
                    <div
                        className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${!open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
                            }`}
                        style={{
                            backgroundColor: color,
                            borderRadius: '5px 10px 10px 10px',
                            ...(open && { transform: 'skew(15deg) scaleY(0.6)' })
                        }}
                    ></div>
                    <div
                        className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${!open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
                            }`}
                        style={{
                            backgroundColor: color,
                            borderRadius: '5px 10px 10px 10px',
                            ...(open && { transform: 'skew(-15deg) scaleY(0.6)' })
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Folder;
