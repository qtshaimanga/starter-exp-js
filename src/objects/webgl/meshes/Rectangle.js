import * as THREE from 'three';
import Config from './../../../config/webgl';
import GUI from './../../../helpers/Gui';
import Utils from './../../../helpers/Utils';

export default class Rectangle {

  constructor(width, height, depth, rotation) {

    this.config = Config.rectangle;

    this.width = width;
    this.height = height;
    this.depth  = depth;
    this.rotationSpeed = rotation;

    this.geometry = new THREE.BoxGeometry(width, height, this.depth, 1, 1, 1);

    let  that = this;
    this.material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: new THREE.Color( this.config.color )
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.x = this.config.x;
    this.mesh.scale.y = this.config.y;
    this.mesh.scale.z = this.config.z;

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
         .addSlider( this.config, 'x', 'rangeAxis', { step: 1, dp: 1, onChange: () => {
           this.mesh.scale.x = this.config.x;
         }})
         .addSlider( this.config, 'y', 'rangeAxis', { step: 1, dp: 1, onChange: () => {
            this.mesh.scale.y = this.config.y;
         }})
         .addSlider( this.config, 'z', 'rangeAxis', { step: 1, dp: 1, onChange: () => {
            this.mesh.scale.z = this.config.z;
         }})
        .addSubGroup({ label: 'Color', enable: false })
          .addColor(this.config, 'color', { onChange: () => {
            this.mesh.material.color = new THREE.Color(this.config.color);
          }})
        .addSubGroup({ label: 'Rotation', enable: false })
          .addSlider( this.config, 'rotation', 'rangeRotation', { step: 2, dp: 3, onChange: () => {
            this.rotationSpeed = this.config.rotation;
          }})
  }

}
