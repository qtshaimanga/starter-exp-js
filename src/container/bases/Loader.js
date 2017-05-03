import dom from 'dom-hand'
import { TimeLineMax, TweenMax } from 'gsap'
import Store from './../../flux/store'
import EventsConstants from './../../flux/constants/EventsConstants.js'
import Actions from './../../flux/actions'

/**
 * Creates a new Loader.
 * @class
 */
class Loader {

  constructor(){

    this.createLoader()
    this.bind();
    this.addListeners();

  }

  createLoader(){

    let body = dom.select( 'body' );
    this.loader = document.createElement('div');
    this.loader.innerHTML = 0
    dom.classes.add( this.loader , 'loader' );
    body.appendChild( this.loader  );

  }

  bind() {

    [ 'progressChange' ]
    .forEach( ( fn ) => this[ fn ] = this[ fn ].bind( this ) )

  }

  addListeners(){

    Store.on( EventsConstants.RESOURCES_PROGRESS, this.progressChange )

  }

  progressChange( p ){

    if( p < 100 ){

      TweenMax.to( this.loader, 0.1, { width: p+"px" })
      this.loader.innerHTML = Math.round(p)

    }

    if( p == 100 ){

      this.loader.innerHTML = Math.round(p)
      this.tl = undefined
      this.tl = new TimelineMax({ onComplete: () => {

        this.tl.clear()
        this.loader.remove();
        Actions.startApp()

      } })

      this.tl.to( this.loader, 0.2, { width: p+"px" })
      this.tl.to( this.loader, 1, { opacity: 0, ease: Sine.easeIn })

    }

  }

}

export default Loader
