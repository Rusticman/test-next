import media from './atomic:media';
import youtube from './atomic:youtube';
import giphy from './atomic:giphy';
import playbuzz from './atomic:playbuzz';

export default function atomic(entity, originalText) {
  switch (entity.type) {
    case 'atomic:media':
      return media(entity, originalText);
    case 'atomic:youtube':
      return youtube(entity, originalText);
    case 'atomic:giphy':
      return giphy(entity, originalText);
    case 'atomic:playbuzz':
      return playbuzz(entity, originalText);
    default:
      return '';
  }
}
