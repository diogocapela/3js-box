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
  camera.position.set(0, 500, 500);
  // camera.position.set(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor('tomato');
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  // Dinamically generate production lines
  // ===================================================================
  $.get('https://pokeapi.co/api/v2/pokedex', data => {
    const productionLines = data.results || [];
    for (let i = 0; i < productionLines.length; i++) {
      const pl = buildProductionLine({
        comprimento: GLOBALS.productionLine.comprimento,
        largura: GLOBALS.productionLine.largura,
        text: `PL ${i + 1}`,
      });

      pl.position.set(GLOBALS.productionLine.largura * i, 0, 0);
      PRODUCTION_LINES.push(pl);
    }

    PRODUCTION_LINES.forEach(pL => {
      scene.add(pL);
    });
  });
}

function animate() {
  requestAnimationFrame(animate);

  PRODUCTS.forEach(p => {
    p.position.z += 1;
  });

  renderer.render(scene, camera);
}
