import AssetsLoader from 'assets-loader';
import Actions from './../flux/actions'

class AssetsManager {

  constructor(Resources){

    const that = this;
    this.p = 0;

    const audioContext = new AudioContext();
    const loader = new AssetsLoader({

      webAudioContext: audioContext,

    })
    .add(Resources)
    .on('error', function( error ) {

      console.log(error);

    })
    .on('progress', function( progress ) {

      let p = (progress * 100).toFixed()

      if( p >= that.p ){

        Actions.onResourceProgress( p );

      }

      that.p = p

    })
    .on('complete', function( map ) {

      loader.get().forEach(function( resource ) {

        Actions.onResourceReady( resource );

      });

    })
    .start();
  }

}

export default AssetsManager
