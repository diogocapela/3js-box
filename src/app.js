let scene;
let camera;
let renderer;

const ___SETTINGS = {};

const ___MODEL = {
  cubes: [],
};

init();
animate();
startOrbitControls();

function init() {
  /* Setup
    ================================================================== */
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75, // field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1,
    100
  );
  camera.position.set(0, 1.3, 3);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor('tomato');
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  window.addEventListener('rezise', onWindowResize);

  /* Logic
    ================================================================== */

  for (let i = 0; i < 10; i++) {
    const cube = buildCube();
    ___MODEL.cubes.push(cube);
  }

  ___MODEL.cubes.forEach(cube => {
    scene.add(cube);
  });

  // Geometry
  const material = new THREE.MeshPhongMaterial({
    color: 0x80ee10,
    shininess: 100,
    side: THREE.DoubleSide,
  });
  const geometry = new THREE.TorusKnotBufferGeometry(0.4, 0.08, 95, 20);
  const object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  scene.add(object);
  const ground = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(9, 9, 1, 1),
    new THREE.MeshPhongMaterial({ color: 0xa0adaf, shininess: 150 })
  );
  ground.rotation.x = -Math.PI / 2; // rotates X/Y to X/Z
  ground.receiveShadow = true;
  scene.add(ground);
}

function animate() {
  requestAnimationFrame(animate);

  ___MODEL.cubes.forEach(cube => {
    cube.position.x = 1;
    cube.position.y = 0;
  });

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  init();
}

function buildCube() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  return cube;
}

function startOrbitControls() {
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1, 0);
  controls.update();
}

function drawControls() {}
