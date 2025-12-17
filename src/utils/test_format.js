const parseRawBullets = (input) => {
  if (Array.isArray(input)) return input;
  if (typeof input !== "string") return [];

  let cleaned = input
    .replace(/\uF0B7/g, "|")
    .replace(/[•●◦]/g, "|")
    .replace(/(^|\s)-+\s+/g, "|") // Hyphen surrounded by spaces
    .replace(/(^|\s)-(?=[A-Z])/g, "|") // Hyphen before Uppercase
    .replace(/^\s*o\s+/gm, "|")
    .replace(/\|\s*o\s+/g, "|")
    .split("|")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);

  return cleaned;
};

const text1 =
  "After breakfast- proceed towards Pahalgam. -Visit bat factory. -Saffron fields -Apple valley on the way . -Enjoy lunch ( own cost ) -Night stay at hotel -Dinner at hotel";
const text2 =
  "Breakfast at hotel - Enroute Lunch at restaurant .( 0wn cost ) - Enjoy poney ride and visit thajwas glacier by poney OR if road open Visist Zero point by Union Cab Cost not include in our package . - Return to Srinagar -Dinner at hotel";
const text3 = "Normal sentence without bullets.";

console.log("--- Text 1 ---");
console.log(parseRawBullets(text1));

console.log("\n--- Text 2 ---");
console.log(parseRawBullets(text2));

const text4 =
  "After breakfast, proceed to Gulmarg -Enroute lunch.( 0wn cost ) -Enjoy Gondoala 1st phase & 2nd phase ride ( own Cost) . Attractions to explore in Gulmarg – ( BOTA PATHRI – RANI TEMPLE – STRAWBERRY VALLEY -) direct basis by foot/poney / union cab . - Activities to do in Gulmarg – ( skeeiing during snow – poney ride ) direct basis . -Night Stay At Gulmarg . Dinner at hot";

console.log("\n--- Text 4 ---");
console.log(parseRawBullets(text4));
