import { Client } from 'minio';

let minioClient: Client | null = null;

export const connectMinio = async (): Promise<Client> => {
  console.log('Trying to connect to MinIO...');

  try {
    if (!minioClient) {
      const { MINIO_ENDPOINT, MINIO_PORT, MINIO_ROOT_USER, MINIO_ROOT_PASSWORD } = process.env;

      minioClient = new Client({
        endPoint: MINIO_ENDPOINT || 'localhost',
        port: parseInt(MINIO_PORT || '9000', 10),
        useSSL: false,
        accessKey: MINIO_ROOT_USER || 'minioadmin',
        secretKey: MINIO_ROOT_PASSWORD || 'miniopassword',
      });
    }

    await minioClient.listBuckets();
    console.log('MinIO Connected successfully');

    return minioClient;
  } catch (error) {
    console.error(`Error MinIO connection: ${(error as Error).message}`);
    throw error;
  }
};

export const getMinioClient = (): Client => {
  if (!minioClient) {
    throw new Error('MinIO client not initialized. Call connectMinio() first.');
  }
  return minioClient;
};

export const getMinioBucket = (): string => {
  return process.env.MINIO_BUCKET || 'cookies';
};

