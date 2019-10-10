function MODELCube({
  width = 10,
  height = 10,
  depth = 1,
  widthSegments = 1,
  heightSegments = 1,
  depthSegments = 1,
  texture,
}) {
  const geometry = new THREE.BoxGeometry(
    width,
    height,
    depth,
    widthSegments,
    heightSegments,
    depthSegments
  );

  const loader = new THREE.TextureLoader();
  const loadedTexture = loader.load(`./assets/textures/${texture}`, () => {
    loadedTexture.wrapS = THREE.RepeatWrapping;
    loadedTexture.wrapT = THREE.RepeatWrapping;
    loadedTexture.offset.set(0, 0);
    loadedTexture.repeat.set(3, 3);
  });

  const material = new THREE.MeshBasicMaterial({
    map: loadedTexture,
  });

  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  // floor.rotation.x = -Math.PI / 2; // rotates X/Y to X/Z
  cube.receiveShadow = true;

  return cube;
}
