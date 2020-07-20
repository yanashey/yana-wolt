#!/bin/bash

IMAGE_DIR=./src/images

cd $IMAGE_DIR/categories

for file in *.jpg-md; do
    echo $(echo "$file" | cut -f 1 -d '.')
    cwebp -q 80 "$(echo "$file" | cut -f 1 -d '.').jpg-md" -o "$(echo "$file" | cut -f 1 -d '.').webp"
done


