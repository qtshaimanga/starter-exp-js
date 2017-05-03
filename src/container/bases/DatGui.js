/**
 * Creates a new DatGui.
 * @class
 */
 class DatGui{

  constructor(){

    this.addListeners();
  }

  addListeners() {
    window.addEventListener('resize', this.resizeHandler);
  }

  resizeHandler() {

  }

}

export default DatGui
