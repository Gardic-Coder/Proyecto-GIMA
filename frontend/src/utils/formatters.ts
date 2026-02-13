/**
 * Extrae las dos primeras iniciales de un nombre completo.
 * Ejemplo: "Pedro Pérez" -> "PP"
 */
export const getIniciales = (name: string): string => {
  if (!name) return '??';
  return name
    .split(' ')
    .filter(Boolean)
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};