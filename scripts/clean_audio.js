/* Deletes any .mp3 in public/assets/audio that is no longer referenced by src/audioMap.js */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { AUDIO_MAP } from '../src/audioMap.js';

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'assets', 'audio');
const valid = new Set(Object.values(AUDIO_MAP).map(e => path.basename(e.file)));
if (fs.existsSync(dir)) {
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.mp3') && !valid.has(f)) { fs.unlinkSync(path.join(dir, f)); console.log('deleted', f); }
  }
}
console.log('Audio cleanup done.');
