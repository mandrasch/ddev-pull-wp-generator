import { writable, derived } from 'svelte/store';

export const pullType = writable('ssh');
export const projectName = writable('my-wp-site');
export const childThemeFolderName = writable('twentytwentyone-child');
export const webServerType = writable('nginx-fpm');
export const selectedPhpVersion = writable('7.4');
export const selectedDbVersionString = writable('maria-10.3');
export const sshHost = writable('user123');
export const sshUser = writable('ssh.example.org');
export const sshWpPath = writable('/sites/my-website/wordpress');

export const selectedDbVersionType = derived(selectedDbVersionString, $selectedDbVersionString => $selectedDbVersionString.includes("maria") ? "mariadb_version" : "mysql_version");
export const selectedDbVersionNumber = derived(selectedDbVersionString, $selectedDbVersionString => $selectedDbVersionString.substring($selectedDbVersionString.indexOf('-') + 1));

/* 
export const greeting = derived(
    name,
    $name => `Hello ${$name}!`
);*/