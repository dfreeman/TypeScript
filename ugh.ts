declare function get<T, Key extends keyof T>(obj: {[K in keyof T]: T[K]}, key: Key): T[Key];

declare const obj: { flag: boolean } & { field: string };

get(obj, 'field');
