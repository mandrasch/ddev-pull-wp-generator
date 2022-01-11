import { writable, derived } from 'svelte/store';

export const name = writable('world');

export const selectedPhpVersion = writable('7.4');

/* 
export const greeting = derived(
    name,
    $name => `Hello ${$name}!`
);*/