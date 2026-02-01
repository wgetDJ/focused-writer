import { useEffect, useState, RefObject } from 'react';

/**
 * Hook to handle Focus Mode logic in the editor.
 * - Tracks the active paragraph based on selection.
 * - Applies focus styles (opacity) to active/inactive paragraphs.
 * - Centers the active paragraph in the viewport (Typewriter Scrolling).
 */
export function useFocusMode(containerRef: RefObject<HTMLElement | null>) {
    const [activeElement, setActiveElement] = useState<HTMLElement | null>(null);

    // 1. Detect Active Element based on Cursor/Selection
    useEffect(() => {
        const handleSelectionChange = () => {
            const selection = window.getSelection();
            if (!selection?.rangeCount || !containerRef.current) return;

            const range = selection.getRangeAt(0);
            let node = range.startContainer;

            // Navigate up to find the direct child of the editor container
            // This ensures we focus the entire paragraph "block"
            while (node && node !== containerRef.current) {
                if (node.parentElement === containerRef.current) {
                    // Found the direct child (paragraph div)
                    if (node !== activeElement) {
                        setActiveElement(node as HTMLElement);
                    }
                    return;
                }
                node = node.parentElement!;
            }
        };

        document.addEventListener('selectionchange', handleSelectionChange);
        return () => document.removeEventListener('selectionchange', handleSelectionChange);
    }, [activeElement, containerRef]);

    // 2. Apply Styles & Center Active Element
    useEffect(() => {
        if (!containerRef.current || !activeElement) return;

        const children = Array.from(containerRef.current.children) as HTMLElement[];

        children.forEach(child => {
            // Clean previous state
            // We use simple opacity transitions without layout shifts (translate)
            child.style.transition = 'opacity 0.5s ease';

            if (child === activeElement) {
                // Active: Full opacity
                child.style.opacity = '1';

                // Center the active element vertically
                const containerHeight = window.innerHeight;
                const elTop = child.offsetTop;
                const elHeight = child.offsetHeight;

                // Target scroll position: Center of element aligns with center of screen
                const scrollTo = elTop - (containerHeight / 2) + (elHeight / 2);

                window.scrollTo({
                    top: scrollTo,
                    behavior: 'smooth'
                });

            } else {
                // Inactive: Faded (Focus Mode)
                child.style.opacity = '0.3';
            }
        });

    }, [activeElement, containerRef]);

    return { activeElement };
}
