import AssetsLoader from 'assets-loader';
//import EventEmitter from 'event-emitter';


class Loader {

  constructor(Resources){
    var audioContext = new AudioContext();
    var loader = new AssetsLoader({
      webAudioContext: audioContext,
    })
    .add(Resources)
    .on('error', function(error) {
      console.log(error);
    })
    .on('progress', function(progress) {
      console.log("progress ", (progress * 100).toFixed() );
    })
    .on('complete', function(map) {
      loader.get().forEach(function(resource) {
        console.log("resource ", resource);
      });
    })
    .start();
  }

  setResources(){
  }

  getResources(){
  }
}

export default Loader
