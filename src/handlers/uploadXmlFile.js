import { uploadXmlFileToS3 } from "../lib/uploadXmlFileToS3";
const axios = require("axios");
var jsonxml = require("jsontoxml");

export const getDataFromApi = () =>
  axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?q=london&appid=9d50450a48809637b4862bdcb125927d"
    )
    .then((requestResponse) => requestResponse.data);

export const parseJsonToXml = (jsonData) => {
  return jsonxml(jsonData);
};

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export async function uploadXmlFile(event, context) {
  const result = await getDataFromApi();
  const parsedData = await parseJsonToXml(JSON.stringify(result));
  const rndInt = randomIntFromInterval(1, 100000);
  const fileName = "test" + rndInt + ".txt";
  const uploadToS3Result = await uploadXmlFileToS3(fileName, parsedData);
  console.log("upload to s3", uploadToS3Result);
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}

export const handler = uploadXmlFile;
