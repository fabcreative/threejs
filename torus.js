// import three modules 

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'


let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 50 );
camera.position.z = 13;
const SPEED = 0.01;

let renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x000000, 1 );
document.body.appendChild( renderer.domElement );

let lights = [];
lights[ 0 ] = new THREE.PointLight( 0xffffff, 1.25, 0, 100 );
lights[ 1 ] = new THREE.PointLight( 0xffffff, 1.5, 0, 100 );
lights[ 2 ] = new THREE.PointLight( 0xffffff, 1.35, 0, 100 );

lights[ 0 ].position.set( 0, 0, 0 );
lights[ 1 ].position.set( 0, 0, 300 );
lights[ 2 ].position.set( - 100, - 200, - 100 );

scene.add( lights[ 0 ] );
scene.add( lights[ 1 ] );
scene.add( lights[ 2 ] );

var mesh = new THREE.Object3D();
THREE.ImageUtils.crossOrigin = '';

var loader = new THREE.TextureLoader();
loader.crossOrigin = '';
var texture = loader.load( 'http://res.cloudinary.com/dspq4okwt/image/upload/v1496611611/stripe_359fc47827b0fe1149670218060be91a_k2d6kd.png');
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
texture.offset.set( 0, 0 );
texture.repeat.set( 25, 25 );
console.log(texture)


mesh.add( new THREE.Mesh(
  new THREE.TorusGeometry( 10, 7, 60, 100 ),
  new THREE.MeshPhongMaterial( {
    color: 0xFFFFFF,
    map: texture,
    side: THREE.DoubleSide,
  })
))

mesh.rotation.x = Math.PI / 2;
scene.add( mesh );

function rotateTorus() {
  mesh.rotation.z -= SPEED * -1.35;
}

var render = function () {
  requestAnimationFrame( render );
  rotateTorus();
  renderer.render( scene, camera );
};

window.addEventListener( 'resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}, false );
render();