import { useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const callbackRef = useRef(callback);
    const throttleRef = useRef(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Store the latest callback.
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    // Clear the timeout when the component unmounts.
    useEffect(() => () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }, []);

    return useCallback((...args: any[]) => {
        if (!throttleRef.current) {
            callbackRef.current(...args);
            throttleRef.current = true;

            timeoutRef.current = setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [delay]);
}
