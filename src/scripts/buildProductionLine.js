function buildProductionLine({ largura, comprimento, text } = {}) {
  this.largura = largura;
  this.comprimento = comprimento;
  this.text = text;

  const productionLine = new THREE.Group();

  const ground = MODELCube({
    width: this.largura,
    height: this.comprimento,
    texture: 'factory_floor_1.jpg',
  });
  ground.position.set(this.largura / 2, 0, this.comprimento / 2);
  ground.rotation.x = -Math.PI / 2; // rotates X/Y to X/Z

  const wall_1 = new MODELCube({
    width: this.largura,
    texture: 'factory_wall_1.jpg',
    height: 10,
  });
  wall_1.position.set(this.largura / 2, 5, 0);

  const wall_2 = new MODELCube({
    width: this.largura,
    texture: 'factory_wall_1.jpg',
    height: 50,
  });
  wall_2.position.set(this.largura / 2, 25, this.comprimento);

  const wall_3 = new MODELCube({
    width: this.comprimento,
    texture: 'factory_wall_1.jpg',
    height: 10,
  });
  wall_3.position.set(0, 5, this.comprimento / 2);
  wall_3.rotation.y = -Math.PI / 2;

  const wall_4 = new MODELCube({
    width: this.comprimento,
    texture: 'factory_wall_1.jpg',
    height: 10,
  });
  wall_4.position.set(this.largura, 5, this.comprimento / 2);
  wall_4.rotation.y = -Math.PI / 2;

  const conveyorBelt = new MODELCube({
    width: 25,
    height: 5,
    texture: 'moving_staircase_1.jpg',
    depth: this.comprimento,
  });
  conveyorBelt.position.set(this.largura / 2, 0, this.comprimento / 2);

  const loader = new THREE.FontLoader();

  loader.load(`assets/fonts/gentilis_bold.typeface.json`, result => {
    const textModel = new MODELText({
      font: result,
      content: text,
    });
    textModel.rotation.y = Math.PI;
    textModel.position.set(this.largura, 25, this.comprimento);

    productionLine.add(textModel);
  });

  productionLine.add(ground);
  productionLine.add(wall_1);
  productionLine.add(wall_2);
  productionLine.add(wall_3);
  productionLine.add(wall_4);
  productionLine.add(conveyorBelt);

  return productionLine;
}
