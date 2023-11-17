function unityShowBanner(msg, type) {}

var buildUrl = "build";
var loaderUrl = buildUrl + "/builder.loader.js";
var config = {
  dataUrl: buildUrl + "/builder.data",
  frameworkUrl: buildUrl + "/builder.framework.js",
  codeUrl: buildUrl + "/builder.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "Avaturn",
  productName: "Avaturn_Unity_WebGL_Example",
  productVersion: "1.0",
  showBanner: unityShowBanner,
};

createUnityInstance(canvas, config, (progress) => {
  //progressBarFull.style.width = 100 * progress + "%";
})
  .then((unityInstance) => {
    gameInstance = unityInstance;
  })
  .catch((message) => {
    alert(message);
  });
