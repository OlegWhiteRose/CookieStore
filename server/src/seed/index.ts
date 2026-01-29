import "dotenv/config";
import { seedMongo } from "./seed-mongo";
import { seedMinio } from "./seed-minio";

const seed = async () => {
  console.log("Trying to fill databases...");

  const results = await Promise.allSettled([
    seedMongo().catch((err) => {
      console.error("MongoDB Error:", err.message);
      throw err;
    }),
    seedMinio().catch((err) => {
      console.error("MinIO Error:", err.message);
      throw err;
    }),
  ]);

  const mongoResult = results[0];
  const minioResult = results[1];

  if (mongoResult.status === "fulfilled") {
    console.log("MongoDB: successfully filled");
  } else {
    console.log("MongoDB: not filled");
  }

  if (minioResult.status === "fulfilled") {
    console.log("MinIO: successfully filled");
  } else {
    console.log("MinIO: not filled");
  }

  const hasErrors = results.some((r) => r.status === "rejected");
  if (hasErrors) {
    console.log("Error");
    process.exit(1);
  }

  console.log("Success");
  process.exit(0);
};

seed();
