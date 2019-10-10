function startLights() {
  const directionalLight = new THREE.DirectionalLight(0xdddddd, 0.8);
  directionalLight.position.set(-80, 80, 80);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0x222222);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  camera.add(pointLight);
}

startLights();
