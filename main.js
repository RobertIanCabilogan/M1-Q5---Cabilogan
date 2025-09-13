import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 8;

//--------------------THE HEAD--------------------\\
const geometryShp = new THREE.SphereGeometry(3, 32, 16 ); 
const materialShp = new THREE.MeshBasicMaterial( { color: 0xFFF000 } ); 
const sphere = new THREE.Mesh( geometryShp, materialShp ); 
scene.add( sphere );


//--------------------THE EYES--------------------\\
const geometryCir = new THREE.CircleGeometry( 0.6, 32 , 0, 3.14); 
const materialCir = new THREE.MeshBasicMaterial( { color: 0x00000 } ); 
const circle = new THREE.Mesh( geometryCir, materialCir ); 
scene.add( circle );

circle.position.z = 3;
circle.position.x = -0.7;
circle.position.y = 0.3


const geometryCir1 = new THREE.CircleGeometry( 0.5, 32 , 0, 3.14); 
const materialCir1 = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ); 
const circle1 = new THREE.Mesh( geometryCir1, materialCir1 ); 
scene.add( circle1 );

circle1.position.z = 3;
circle1.position.x = -0.7;
circle1.position.y = 0.35


const geometryCir2 = new THREE.CircleGeometry( 0.15, 32); 
const materialCir2 = new THREE.MeshBasicMaterial( { color: 0x00000 } ); 
const iris = new THREE.Mesh( geometryCir2, materialCir2 ); 
scene.add( iris );

iris.position.z = 3;
iris.position.x = -0.5;
iris.position.y = 0.7


const geometryCir3 = new THREE.CircleGeometry( 0.6, 32 , 0, 3.14); 
const materialCir3 = new THREE.MeshBasicMaterial( { color: 0x00000 } ); 
const Othercircle = new THREE.Mesh( geometryCir3, materialCir3 ); 
scene.add( Othercircle );

Othercircle.position.z = 3;
Othercircle.position.x = 0.7;
Othercircle.position.y = 0.3

const geometryCir4 = new THREE.CircleGeometry( 0.5, 32 , 0, 3.14); 
const materialCir4 = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } ); 
const Othercircle1 = new THREE.Mesh( geometryCir4, materialCir4 ); 
scene.add( Othercircle1 );

Othercircle1.position.z = 3;
Othercircle1.position.x = 0.7;
Othercircle1.position.y = 0.35


const geometryCir5 = new THREE.CircleGeometry( 0.15, 32); 
const materialCir5 = new THREE.MeshBasicMaterial( { color: 0x00000 } ); 
const iris1 = new THREE.Mesh( geometryCir5, materialCir5 ); 
scene.add( iris1 );

iris1.position.z = 3;
iris1.position.x = 0.9;
iris1.position.y = 0.7



//--------------------THE MOUTH--------------------\\

const geometryMth = new THREE.CircleGeometry( 1.2, 32 , 3.14, 3.15); 
const materialMth = new THREE.MeshBasicMaterial( { color: 0x00000 } ); 
const Mth = new THREE.Mesh( geometryMth, materialMth ); 
scene.add( Mth );

Mth.position.z = 3;
Mth.position.x = 0;
Mth.position.y = -0.1;

const geometryMth1 = new THREE.CircleGeometry( 1.04, 32 , 3.14, 3.15); 
const materialMth1 = new THREE.MeshBasicMaterial( { color: 0x941C47 } ); 
const Mth1 = new THREE.Mesh( geometryMth1, materialMth1 ); 
scene.add( Mth1 );

Mth1.position.z = 3;
Mth1.position.x = 0;
Mth1.position.y = -0.2;


const geometryMth2 = new THREE.CircleGeometry( 0.5, 32 , 0.6, 2.7); 
const materialMth2 = new THREE.MeshBasicMaterial( { color: 0xFF73A3 } ); 
const Mth2 = new THREE.Mesh( geometryMth2, materialMth2 ); 
scene.add( Mth2 );

Mth2.position.z = 3;
Mth2.position.x = 0.4;
Mth2.position.y = -1.18;

//--------------------MISC--------------------\\
const geometryTor = new THREE.TorusGeometry( 0.5, 0.2, 16, 100 ); 
const materialTor = new THREE.MeshBasicMaterial( { color: 0x0040ED } ); 
const torus = new THREE.Mesh( geometryTor, materialTor); 
const torusObj = new THREE.Object3D();
torusObj.add(torus);
scene.add( torusObj );


const geometry = new THREE.IcosahedronGeometry(0.5, 0);
const material = new THREE.MeshBasicMaterial({ color: 0xFF0000});
const icosahedron = new THREE.Mesh(geometry, material);
const d20 = new THREE.Object3D();
d20.add(icosahedron);
scene.add(d20);

const geometryEm = new THREE.ConeGeometry( 0.8, 0.8, 9 ); 
const materialEm = new THREE.MeshBasicMaterial( {color: 0x00FF22} );
const cone = new THREE.Mesh(geometryEm, materialEm ); 
const Emrald = new THREE.Object3D();
Emrald.add(cone);
scene.add( Emrald );
Emrald.rotation.x = 9;
const radius = 4;
let angle = 0;   
let time = 0;

function animate() {
  requestAnimationFrame(animate);

  angle += 0.02; // Speed of orbit
  time += 0.02;

  // The Orbitting Effect
  torusObj.position.x = radius * Math.cos(angle);
  torusObj.position.z = radius * Math.sin(angle);
  torusObj.position.y = 1.5 + Math.sin(time * 1.5) * 1;

  d20.position.x = radius * Math.cos(angle * -1);
  d20.position.z = radius * Math.sin(angle * -1);
  d20.position.y = 1 + Math.sin(time * 1.9) * 2.5;

  Emrald.position.y = radius * Math.cos(angle);
  Emrald.position.z = radius * Math.sin(angle);
  Emrald.position.x = Math.sin(time * 1.5) * 2.5;
  //Speeen
  d20.rotation.y += 0.03;
  d20.rotation.z += 0.03;
  torus.rotation.y += 0.05;
  torus.rotation.z += 0.05;
  torus.rotation.x += 0.05;
  Emrald.rotateY(0.05)
  renderer.render(scene, camera);
}
animate();