import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

// Scene
const scene = new THREE.Scene();

// Blue Cube
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 0x007de7 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 4;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// gsap library
gsap.to(mesh.position, { duration: 2, delay: 1, x: 3, y: 3 });
gsap.to(mesh.rotation, { duration: 2, delay: 1, x: 3, y: 3 });
gsap.to(mesh.position, { duration: 2, delay: 2, x: 0, y: 0 });
gsap.to(mesh.rotation, { duration: 2, delay: 2, x: 0, y: 0 });

// Animations
const tick = () => {
  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
