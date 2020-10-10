export const MAX_WIDTH_FOR_MOBILE = 576;

export function getIsMobileScreen() {
    return window.innerWidth < MAX_WIDTH_FOR_MOBILE;
}
