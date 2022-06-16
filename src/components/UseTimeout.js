//React Imports
import { useRef, useEffect } from "react";

export default function UseTimeout(callback, delay) {
    const stableCallback = useRef(callback);

    useEffect(() => {
        stableCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => stableCallback.current();

        if (typeof delay !== "number") return;

        const t = setTimeout(tick, delay);

        return () => clearTimeout(t);
    }, [delay]);
}
