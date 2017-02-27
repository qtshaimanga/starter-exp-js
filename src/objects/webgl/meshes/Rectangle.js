import * as THREE from 'three';


export default class Rectangle {

  constructor(width, height) {

    this.width = width;
    this.height = height;
    this.depth  = 2;
    this.rotationSpeed = .005;

    this.geometry = new THREE.BoxGeometry(this.width, this.height, this.depth, 1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: 0x00ff00
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

  }

  update() {

    this.mesh.rotation.x += this.rotationSpeed;
    this.mesh.rotation.y += this.rotationSpeed;
    this.mesh.rotation.z += this.rotationSpeed;

  }
}
