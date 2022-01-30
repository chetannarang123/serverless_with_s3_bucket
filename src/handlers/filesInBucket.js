import { listObjectFromS3 } from "../lib/filesInBucket";

export async function filesInBucket(event, context) {
  const objectsFromBucket = await listObjectFromS3();
  console.log(
    "The number of files in bucket are",
    objectsFromBucket.Contents.length
  );
  return;
}

export const handler = filesInBucket;
