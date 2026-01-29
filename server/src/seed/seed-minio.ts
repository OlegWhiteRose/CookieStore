import * as fs from 'fs';
import * as path from 'path';
import { connectMinio, getMinioClient, getMinioBucket } from '@config/minio.config';

export const seedMinio = async (): Promise<void> => {
  await connectMinio();

  const minioClient = getMinioClient();
  const bucketName = getMinioBucket();

  const bucketExists = await minioClient.bucketExists(bucketName);
  if (!bucketExists) {
    console.log(`MinIO: creating bucket "${bucketName}"...`);
    await minioClient.makeBucket(bucketName);

    const policy = {
      Version: '2012-10-17',
      Statement: [
        {
          Effect: 'Allow',
          Principal: { AWS: ['*'] },
          Action: ['s3:GetObject'],
          Resource: [`arn:aws:s3:::${bucketName}/*`],
        },
      ],
    };
    await minioClient.setBucketPolicy(bucketName, JSON.stringify(policy));
    console.log(`MinIO: bucket "${bucketName}" created with public access`);
  } else {
    console.log(`MinIO: bucket "${bucketName}" already exists`);
  }

  const cookiesDir = path.resolve(__dirname, '../../../cookies');

  if (!fs.existsSync(cookiesDir)) {
    console.log(`MinIO: cookies folder not found: ${cookiesDir}`);
    return;
  }

  const files = fs.readdirSync(cookiesDir).filter((f) => f.endsWith('.webp'));
  console.log(`MinIO: found ${files.length} files to upload`);

  for (const file of files) {
    const filePath = path.join(cookiesDir, file);
    const objectName = `cookies/${file}`;

    try {
      await minioClient.statObject(bucketName, objectName);
      console.log(`MinIO: ${objectName} already exists, skipping`);
    } catch {
      console.log(`MinIO: uploading ${objectName}...`);
      await minioClient.fPutObject(bucketName, objectName, filePath, {
        'Content-Type': 'image/webp',
      });
    }
  }
};
