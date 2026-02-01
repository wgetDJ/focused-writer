'use client';

import { useEffect, useRef } from 'react';
import { useFocusMode } from '@/hooks/useFocusMode';

export function Editor() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Use custom hook for Focus Mode logic (centering & fading)
    useFocusMode(containerRef);

    // Initialize with one paragraph if empty
    useEffect(() => {
        if (containerRef.current && containerRef.current.innerHTML === "") {
            const p = document.createElement('div');
            p.innerHTML = '<br>'; // Placeholder for cursor
            containerRef.current.appendChild(p);
        }
    }, []);

    return (
        <div className="relative min-h-screen bg-background text-foreground font-mono flex justify-center overflow-x-hidden">
            <div className="relative w-[80%] max-w-[1000px]">
                {/* Content Editable Editor */}
                <div
                    ref={containerRef}
                    contentEditable
                    className="outline-none min-h-screen pb-[50vh] pt-[50vh] text-lg leading-relaxed z-10 relative"
                    suppressContentEditableWarning
                    spellCheck={false}
                    autoFocus
                >
                    {/* Content will be managed by DOM/React */}
                </div>

                {/* Global Styles */}
                <style jsx global>{`
          /* Indent first line of every paragraph (div) inside the editor */
          [contenteditable] > div {
            text-indent: 2rem;
            position: relative;
            min-height: 1.625em;
            color: inherit; /* Inherit text color */
          }
          
          /* Hide scrollbars */
           body::-webkit-scrollbar {
            display: none;
          }
          body {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
            </div>
        </div>
    );
}
