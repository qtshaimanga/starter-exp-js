import Store from '../flux/store'
import EventsConstants from '../flux/constants/EventsConstants.js'
import Resources from '../config/resources';
import AssetsManager from './../helpers/AssetsManager.js';
import Loader from './bases/Loader.js';
import InitialState from './../config/initialState.js'

import BasicThree from './components/BasicThree';
// import BasicCanvas from './components/BasicCanvas';
// import BasicPixi from './components/BasicPixi';
// import BasicD3 from './components/BasicD3';

/**
 * Creates a new Main.
 * @class
 */
 class Main{

  constructor(){

    this.bind();
    this.addListeners();
    this.init();

  }

  init(){

    new InitialState()
    new AssetsManager( Resources );
    new Loader();

  }

  bind() {

    [ 'appStart' ]
    .forEach( ( fn ) => this[ fn ] = this[ fn ].bind( this ) )

  }

  addListeners(){

    Store.on( EventsConstants.APP_START, this.appStart );

  }

  appStart( ){

    new BasicThree();

  }



}

export default Main
