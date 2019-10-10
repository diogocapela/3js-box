/* eslint-disable no-underscore-dangle */
let scene;
let camera;
let renderer;

const GLOBALS = {
  productionLine: {
    largura: 100,
    comprimento: 300,
  },
};

const ___SETTINGS = {
  camera: {
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  },
};

const ___MODEL = {};

const PRODUCTION_LINES = [];
const PRODUCTS = [];

init();
animate();

function init() {
  /* Setup
    ================================================================== */
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75, // field of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near
    1000 // far
  );
  camera.position.set(0, 500, 1000);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor('tomato');
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const productionLine = buildProductionLine({
    comprimento: GLOBALS.productionLine.comprimento,
    largura: GLOBALS.productionLine.largura,
  });
  PRODUCTION_LINES.push(productionLine);
  PRODUCTION_LINES.forEach(pL => {
    scene.add(pL);
  });

  const product = buildProduct();
  PRODUCTS.push(product);
  PRODUCTS.forEach(p => {
    p.position.set(GLOBALS.productionLine.largura / 2, 10, -10);
    setTimeout(() => {
      scene.remove(p);
    }, 10000);
    scene.add(p);
  });
}

function animate() {
  requestAnimationFrame(animate);

  PRODUCTS.forEach(p => {
    p.position.z += 0.1;
  });

  renderer.render(scene, camera);
}
