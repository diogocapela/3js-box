$('body').append(`
<section style="position: absolute; top: 0; right: 0;">

    <div>
        <input type="range" id="inputCameraPositionX" min="-100" max="100">
        <label>Camera X</label>
    </div>

    <div>
        <input type="range" id="inputCameraPositionY" min="-100" max="100">
        <label>Camera Y</label>
    </div>

    <div>
        <input type="range" id="inputCameraPositionZ" min="-100" max="100">
        <label>Camera Z</label>
    </div>

    <input id="productionLineIndex" placeholder="Production Line Index" />
    <button id="generateOrder">Generate Order</button>

</section>
`);

$('#inputCameraPositionX').change(e => {
  camera.position.x = e.target.value || 0;
});

$('#inputCameraPositionY').change(e => {
  camera.position.y = e.target.value || 0;
});

$('#inputCameraPositionY').change(e => {
  camera.position.z = e.target.value || 0;
});

$('#generateOrder').click(e => {
  const product = buildProduct();

  const index = $('#productionLineIndex').val();

  product.position.set(
    GLOBALS.productionLine.largura * (index - 1) +
      GLOBALS.productionLine.largura / 2,
    10,
    -10
  );

  scene.add(product);
  PRODUCTS.push(product);

  setTimeout(() => {
    scene.remove(product);
  }, 5000);
});
