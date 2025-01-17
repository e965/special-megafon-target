/** Do not forget to change these, if breakpoints are different in mq.styl */
const BREAKPOINTS = {
    mobile: 680,
    largeDesktop: 1200,
};

/**
 * Check for mobile screen
 */
export const isMobile = () => {
    return !window.matchMedia(`(min-width: ${BREAKPOINTS.mobile}px)`).matches;
};

/**
 * Check for large desktop screen
 */
export const isLargeDesktop = () => {
    return window.matchMedia(`(min-width: ${BREAKPOINTS.largeDesktop}px)`).matches;
};

/**
 * Check for Retina display
 */
export const isRetinaDisplay = () => {
    return window.matchMedia('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)').matches;
};
