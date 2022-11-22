import { readable } from 'svelte/store';

const largeScreenMediaQuery = window.matchMedia('(min-width: 1024px)');

/**
 * Large screen: `min-width: 1024px`
 */
export const isLargeScreen = readable<boolean>(largeScreenMediaQuery.matches, (set) => {
    largeScreenMediaQuery.addEventListener('change', ($) => set($.matches));
});
