---
sidebar_position: 3
---

# Store data on Niftyz Cloud

When you'll create an NFT you'll probably need a storage solution. Niftyz provides a secure storage through AWS S3 through presigned URLs. 
If you don't know how to use it, please refer to official docs [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html). 
You can use it with any available programming language provided by AWS.

# Ask for a presigned url

In order to create a presigned url you must give following informations:
- **filenames**: filenames of the files you're trying to upload
- **filetypes**: file types of the files you're trying to upload
- **type**: type of permission for the files, they can be `public` or `private`, we suggest to use `private` to store locked data and `public` to store NFT public image.

```
[POST] {{GATEWAY}}/storage/generate

{
    "filenames": [
        "test.txt"
    ],
    "filetypes": [
        "plain/text"
    ],
    "type": "public"
}
```