import AWS from "aws-sdk";

const s3 = new AWS.S3();

export async function listObjectFromS3() {
  const result = await s3
    .listObjects({
      Bucket: process.env.KITCO_BUCKET_NAME,
    })
    .promise();

  return result;
}
