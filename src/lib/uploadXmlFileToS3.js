import AWS from "aws-sdk";

const s3 = new AWS.S3();

export async function uploadXmlFileToS3(key, body) {
  const result = await s3
    .putObject({
      Bucket: process.env.KITCO_BUCKET_NAME,
      Key: key,
      Body: body,
    })
    .promise();

  return result;
}
