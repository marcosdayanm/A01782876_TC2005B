import fs from "fs";

export function SaveCardsOnJson(filePath, cards) {
  try {
    const jsonData = JSON.stringify({ cards }, null, 2);
    fs.writeFileSync(filePath, jsonData, "utf8");
    console.log(`${filePath} modified successfully`);
  } catch (error) {
    console.error(`Error while saving ${filePath}: `, error);
  }
}

export function ReadCardsFromJson(filePath) {
  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(jsonData);

    return data.cards || {};
  } catch (error) {
    console.error(`Error while reading ${filePath}: `, error);
    return {};
  }
}
