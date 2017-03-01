import Loader from './components/Loader';
import Resources from './services/resources';

import BasicThree from './components/BasicThree';
// import BasicCanvas from './components/BasicCanvas';

new Loader(Resources);
new BasicThree();
// new BasicCanvas();

//eventEmitter -> instanciate BasicThree
