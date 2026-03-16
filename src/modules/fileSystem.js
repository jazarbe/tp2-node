import fs from 'fs';

export default function copiar(original, copia) {
  try {
    fs.copyFileSync(original, copia);
    console.log('Copia exitosa');
  } catch (err) {
    console.error('Error al copiar:', err.message);
    throw err;
  }
}