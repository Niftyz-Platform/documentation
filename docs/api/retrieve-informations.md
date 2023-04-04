---
sidebar_position: 6
---

# Retrieve informations about NFTs

Now an NFT is minted you can retrieve informations on them, if they're public or private and so on. We provide some endpoints to get those data and, eventually, unlock them (if the user owns a copy of the NFT).

# Get last NFTs minted on the platform

```
[POST] {{GATEWAY}}/open/get

{
    "limit": "<MAX_NUMBER_OF_ELEMENTS_RETURNED>"
}
```

# Get collected NFTs by account

```
[POST] {{GATEWAY}}/open/collected

{
    "limit": "<MAX_NUMBER_OF_ELEMENTS_RETURNED>",
    "receiver": <RECEIVER_EMAIL_OR_ETH_ADDRESS>
}
```

# Get created NFTs by account

To unlock private informations you must provide a valid signature for the message `Unlock token of wallet <ETH_ADDRESS>`.

```
[POST] {{GATEWAY}}/open/created


{
    "limit": "<MAX_NUMBER_OF_ELEMENTS_RETURNED>",
    "address": <CREATOR_EMAIL_OR_ETH_ADDRESS>,
    "signature": "<OPTIONAL_SIGNATURE_TO_UNLOCK_PRIVATE_INFORMATIONS>"
}
```


# Get metadata for a specific token

To know all the related metadata of a token. You must pass the `METADATA_HASH` returned by one of the previous endpoints.

```
[GET] {{GATEWAY}}/open/metadata/<METADATA_HASH>
```

# Get the token balance for a specific token

To know if an account owns some of the tokens you can call following endpoint, where `TOKEN_ID` is returned by 

```
[GET] {{GATEWAY}}/open/balance/<TOKEN_ID>/<ETH_ADDRESS>
```