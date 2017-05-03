/**
 * Creates a new BasicD3.
 * @class
 */
 class BasicD3{

  constructor(){

    this.addListeners();
  }

  addListeners() {
    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler() {

  }

}

export default BasicD3
