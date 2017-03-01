import AssetsLoader from 'assets-loader';
// import eventEmitter from 'event-emitter';


class Loader {

  constructor(Resources){
    console.log("yolo src", Resources);
    var that = this;
    var audioContext = new AudioContext();
    var loader = new AssetsLoader({
      webAudioContext: audioContext,
    })
    .add(Resources)
    .on('error', function(error) {
      console.log("loading error", error);
    })
    .on('progress', function(progress) {
      console.log("progress ", (progress * 100).toFixed() );
    })
    .on('complete', function(map) {
      loader.get().forEach(function(resource) {
        console.log("resource ", resource);
        //eventEmitter -> ()
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
