// import three modules 

import * as THREE from 'https://unpkg.com/three@0.137.0/build/three.module.js';

import {OrbitControls} from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js'

// get a reference to the container element that will hold our scene
	const canvas = document.querySelector('canvas.webgl')

// create a Scene
	const scene = new THREE.Scene();

// set the background color
	scene.background = new THREE.Color(0x000000);

// create a camera
	const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );

	camera.position.z = 1;

// create a geometry
	const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );

// create a material
	const material = new THREE.MeshNormalMaterial();

// create a Mesh containing the geometry and material
	const mesh = new THREE.Mesh( geometry, material );

// add the mesh to the scene
	scene.add( mesh );

// controls
	const controls = new OrbitControls(camera, canvas)

	controls.enableZoom = false;
	controls.enableDamping = true

// create the renderer
	const renderer = new THREE.WebGLRenderer( { antialias: true } );

// set the renderer to the same size as our container element
	renderer.setSize( window.innerWidth, window.innerHeight );

// set the pixel ratio so that our scene will look good on HiDPI displays
	renderer.setPixelRatio(window.devicePixelRatio);

// set the animation function to loop
	renderer.setAnimationLoop( animation );

// add the automatically created <canvas> element to the page
	document.body.appendChild( renderer.domElement );

// animation
	function animation( time ) {

		mesh.rotation.x = time / 2000;
		mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

	}
