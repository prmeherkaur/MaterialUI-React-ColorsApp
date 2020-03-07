import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  //takes pallete as input and generates new pallete on basis of shade
  let newPalette = { // new pallete to be returned
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {
      /*
      50:[];
      100:[];
      */
    } //we're only going to change the colors
  };
  for (let level of levels) {
    newPalette.colors[level] = [];
  }
  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse(); //light-to-dark
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(), //to get rgb color
        rgba: chroma(scale[i])
          .css()
          .replace("rgba", "rgba")
          .replace(")", ",1.0)")
      });
    }
  }
  return newPalette;
}
function getRange(hexColor) {
  const end = "#fff";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}
//color.darken(1.4)-color-white(end)
function getScale(hexColor, numberOfColors) {
  //gives us scale of colors based on input givel
  return chroma //wrapping in chroma 
    .scale(getRange(hexColor))
    .mode("lab")//lightness-ab
    .colors(numberOfColors);
}

export { generatePalette };
