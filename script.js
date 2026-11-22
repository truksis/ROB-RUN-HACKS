function toggle(name) {
  const status = document.getElementById("status");

  if (!window.features) {
    window.features = {};
  }

  window.features[name] = !window.features[name];

  status.textContent =
    name + ": " +
    (window.features[name] ? "ON" : "OFF");
}
