function buildProduct() {
  const product = MODELCube({
    width: 20,
    height: 20,
    depth: 20,
    color: 'red',
  });
  product.position.set(0, 0, 0);
  product.rotation.x = -Math.PI / 2; // rotates X/Y to X/Z
  return product;
}
