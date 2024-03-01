const lerp = (f0: number, f1: number, t: number) => (1 - t) * f0 + t * f1;

export default lerp;