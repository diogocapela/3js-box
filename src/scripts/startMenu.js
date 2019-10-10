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
