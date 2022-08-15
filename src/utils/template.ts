
export function template (srt: string, data: { [K: string]: string }): string {
  return Object.entries(data)
    .reduce((prev, [key, val]) => prev.replace(new RegExp(`\\$\{${key}\\}`, 'gi'), val), srt);
}
