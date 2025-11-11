#!/bin/sh

echo "Waiting for MinIO to be ready..."
sleep 5

echo "Configuring mc..."
mc alias set myminio http://minio:9000 ${MINIO_ROOT_USER} ${MINIO_ROOT_PASSWORD}

echo "Testing connection..."
until mc admin info myminio > /dev/null 2>&1; do
    echo "MinIO not ready yet, waiting..."
    sleep 3
done

echo "MinIO is ready!"

echo "Checking if bucket exists..."
if ! mc ls myminio/cookies > /dev/null 2>&1; then
    echo "Creating bucket 'cookies'..."
    mc mb myminio/cookies
fi

echo "Setting bucket policy to download..."
mc anonymous set download myminio/cookies

echo "Uploading images..."
for file in /images/*.webp; do
    if [ -f "$file" ]; then
        mc cp "$file" myminio/cookies/
    fi
done

echo "Images uploaded successfully!"
mc ls myminio/cookies
