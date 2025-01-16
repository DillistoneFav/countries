type TProps = {
    from: number;
    to: number;
    duration: number;
    onUpdate: (value: number) => void;
    onComplete: () => void;
}

export const animate = ({ from, to, duration, onUpdate, onComplete }: TProps) => {
    const start = performance.now();

    const tick = (timestamp: DOMHighResTimeStamp) => {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const value = from + progress * (to - from);

        onUpdate(value);

        if (progress < 1) {
            requestAnimationFrame(tick);
        } else {
            onComplete();
        }
    }

    requestAnimationFrame(tick);
};
