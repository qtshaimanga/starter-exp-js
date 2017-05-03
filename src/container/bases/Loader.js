import Store from './../../flux/store'
import EventsConstants from './../../flux/constants/EventsConstants.js'
import Actions from './../../flux/actions'


/**
 * Creates a new Loader.
 * @class
 */
class Loader {

  constructor(){

    this.bind();
    this.addListeners();

  }

  bind() {

    [ 'progressChange' ]
    .forEach( ( fn ) => this[ fn ] = this[ fn ].bind( this ) )

  }

  addListeners(){

    Store.on( EventsConstants.RESOURCES_PROGRESS, this.progressChange )

  }

  progressChange( p ){

    if( p == 100 ){

      //TODO TimeLineMax Transition
      setTimeout(() =>{

        Actions.startApp();

      }, 200);


    }

  }

}

export default Loader
