const FBX_ROOT = typeof process === 'object' && typeof global === 'object' ? global : window;

if (typeof window === 'undefined') throw new Error('Frontbx requires a window object to run.');