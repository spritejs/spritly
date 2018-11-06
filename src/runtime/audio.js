const audioCache = new Map();
const testAudio = new Audio();

export default {
  canplay(src) {
    return testAudio.canPlayType(src);
  },
  load(res) {
    if(typeof res === 'string') {
      res = {id: res, src: res};
    }

    let promise = audioCache.get(res.id);
    if(promise) return promise;

    const sound = new Audio(res.src);
    promise = new Promise((resolve) => {
      sound.oncanplaythrough = () => {
        resolve(sound);
      };
    });
    audioCache.set(res.id, promise);

    return promise;
  },
  play(res) {
    this.load(res).then(sound => sound.play());
  },
};
