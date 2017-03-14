import * as THREE from 'three';
import GUI from '../../../helpers/Gui';
import Utils from '../../../helpers/Utils';

export default class Rectangle {

  constructor(width, height) {

    this.rectangle = [
      {
        x: 0,
        y: 0,
        z: 0,
        range: [ 1, 500 ],
        color: "#9f8ad4"
      }
    ];

    this.width = width;
    this.height = height;
    this.depth  = 2;
    this.rotationSpeed = .005;

    this.geometry = new THREE.BoxGeometry(width, height, this.depth, 1, 1, 1);
    var that = this;
    this.material = new THREE.MeshBasicMaterial({
      wireframe: true,
    color: new THREE.Color( this.rectangle[0].color )
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.initGUI();
  }

  update() {

    this.mesh.rotation.x += this.rotationSpeed;
    this.mesh.rotation.y += this.rotationSpeed;
    this.mesh.rotation.z += this.rotationSpeed;

  }

  initGUI(){
    GUI.panel
      .addGroup({ label: 'Rectangle', enable: true })
        .addSubGroup({ label: 'size', enable: false })
         .addSlider( this.rectangle[0], 'x', 'range', { step: 100, dp: 0, onChange: () => {
           this.mesh.scale.x = this.rectangle[0].x/100;
         }})
         .addSlider( this.rectangle[0], 'y', 'range', { step: 100, dp: 0, onChange: () => {
            this.mesh.scale.y = this.rectangle[0].y/100
         }})
         .addSlider( this.rectangle[0], 'z', 'range', { step: 100, dp: 0, onChange: () => {
            this.mesh.scale.z = this.rectangle[0].z/100
         }})
        .addSubGroup({ label: 'Color', enable: false })
          .addColor(this.rectangle[0], 'color', { onChange: () => {
            this.mesh.material.color = new THREE.Color(this.rectangle[0].color);
          }})
  }
}
