import { useEffect } from 'react';

export function useClickOutside(ref, isOpen, onClose) {
    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);
        return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, [ref, isOpen, onClose]);
}