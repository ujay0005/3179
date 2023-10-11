var vg_1 = "https://raw.githubusercontent.com/ujay0005/3179/main/json/worldmap.vg.json";
vegaEmbed("#map", vg_1, {mode: "vega-lite"}).then(console.log).catch(console.warn)

var vg_2 = "https://raw.githubusercontent.com/ujay0005/3179/main/json/tempbar.vg.json";
vegaEmbed("#tempbar", vg_2, {mode: "vega-lite"}).then(console.log).catch(console.warn)

var vg_3 = "https://raw.githubusercontent.com/ujay0005/3179/main/json/tempbar.vg.json";
vegaEmbed("#areachart", vg_3, {mode: "vega-lite"}).then(console.log).catch(console.warn)


