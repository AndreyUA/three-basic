// Create SCENE
const scene = new THREE.Scene();

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Red material
const material = new THREE.MeshBasicMaterial({
  color: "#ff0000",
});

// Create mesh
const mesh = new THREE.Mesh(geometry, material);

// Add mesh to scene
scene.add(mesh);
