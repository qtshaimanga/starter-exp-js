/**
 * Creates a new BasicPixi.
 * @class
 */
 class BasicPixi{

  constructor(){

    this.addListeners();
  }

  addListeners() {
    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler() {

  }

}

export default BasicPixi
