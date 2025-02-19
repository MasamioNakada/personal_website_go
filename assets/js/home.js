var currentLayout = 0

var list_config = [
  "CardViewProse",
  "CardViewScreenWidth",
  "NormalView"
]

var titles = {
  "CardViewProse" : "card view with constrained width",
  "CardViewScreenWidth" : "card view with full width",
  "NormalView" : "standard list view"
}

var currentConfig = 0

function switchList() {

  var old = currentConfig
  currentConfig = currentConfig == list_config.length - 1 ? 0 : currentConfig + 1

  var oldDiv = document.getElementById(list_config[old])
  var currentDiv = document.getElementById(list_config[currentConfig])
  const configCode = document.querySelectorAll("code[id=config]");

  currentDiv.style.display = "block";
  oldDiv.style.display = "none";

  configCode.forEach(function (el) {
    el.innerText = titles[list_config[currentConfig]];
  });

}

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("#contact-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      window.location.href = "mailto:nakada2130@gmail.com?subject=Hello from your website&body=I found your website and would like to connect!";
    })
  )

  document.querySelectorAll("#switch-config-button").forEach((button) =>
    button.addEventListener("click", function (e) {
      e.preventDefault();
      switchList();
    })
  );
});

  