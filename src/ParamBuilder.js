export class ParamBuilder {
    getQuality (type, quality) {
        if (type === 'audio') {
          return quality === 'high' ? '--audio-quality 0' : '';
        } else {
          return quality === 'high' ? 'bestvideo+bestaudio[ext=m4a]' : 'best[ext=mp4]/best';
        }
      }
    getCookiesFromBrowser () {
        return '--cookies-from-browser firefox';
    }
    
    getRestrictFilenames () {
        return '--restrict-filenames';
    }
}