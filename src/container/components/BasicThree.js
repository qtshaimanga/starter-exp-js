import * as THREE from 'three';
import Config from './../../config/webgl'
import bindAll from 'lodash.bindall';
import Rectangle from './../../objects/webgl/meshes/Rectangle';

//TODO add GLSL
/**
 * Creates a new BasicThree.
 * @class
 */
class BasicThree {

	constructor(){

		this.config = Config.rectangle

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );

		this.cube = new Rectangle(this.config.x, this.config.y, this.config.z, this.config.rotation );

		this.scene.add( this.cube.mesh );

		this.camera.position.z = 5;

		bindAll(this, ['render']);

		this.render();

	}


	render() {

		this.cube.update();
		this.renderer.render( this.scene, this.camera );

		requestAnimationFrame( this.render );

	}

}

export default BasicThree
