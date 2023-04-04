---
sidebar_position: 4
---

# Mint NFTs

As we mentioned in the [architecture](/docs/api/architecture) page we need to prepare an NFT before it will be available to be minted. 
In order to successfully prepare the NFT you'll be required to send a payment through Stripe using provided `payment_intent`. 
If you don't know how to setup a Payment Element we suggest to read the official [docs](https://stripe.com/docs/payments/payment-element).

If you want to remove those limits and discuss with us a different use case please reach out using our [form](https://survey.niftyz.io/api). 

# Create request

To create a request you can use following JSON structure, but we have to explain a bit some of the parameters:

- **title**, **description** and **cover** are called "metadata", these are the three information we use to create an `hash` and link this specific request to the blockchain and they must be unique (no one can send the same metadata twice).
- **amount** and **allowlist** are mutual exclusive, this means you can set the *amount* if you want that *anyone* will be able to mint the NFT, otherwise we'll use the *allowlist* to calculate the maximum amount of the NFTs (one NFT per e-mail).
- **attachments** and **links** are not mutual exclusive, but you can setup up to **3** in total (1 attachment and 2 links, for example).

```
[POST] {{GATEWAY}}/open/create

{
    "title": "NFT_TITLE",
    "description": "NFT_DESCRIPTION",
    "cover": "LINK_TO_COVER_IMAGE",
    "amount": "AMOUNT_OF_TOKENS_TO_MINT",
    "address": "EMAIL_OR_ETH_ADDRESS_OF_OWNER",
    "allowlist": "ARRAY_OF_ALLOWED_EMAILS",
    "transfereable": "TRUE_OR_FALSE",
    "visibility": "PUBLIC_OR_PRIVATE",
    "attachments": "ARRAY_OF_STORAGE_LINKS",
    "links": "ARRAY_OF_ARBITRARY_LINK"
}
```

The endpoint will return a `payment` attribute, if needed, otherwise it will be ready to be prepared. An `uuid` attribute will be returned too and it's mandatory to be saved somewhere in your system, because it's needed to proceed with preparing procedure.

# Check payment

This endpoint it's needed to check the payment, if a payment is required to proceed. You can just call it after you or your customer ended with the Stripe procedure.

```
[POST] {{GATEWAY}}/open/create

{
    "uuid": "<REQUEST_UUID>"
}
```

# Prepare the NFT on-chain

This endpoint must be called to run the on-chain transaction, this will actually prepare the NFT on-chain. After this endpoint anyone enabled will be able to mint a copy of the NFT.

```
[POST] {{GATEWAY}}/open/prepare

{
    "uuid": "<REQUEST_UUID>"
}
```

# Share the link

This endpoint can be called to share the NFT with anyone in the **allowlist**, if provided, or will provide the public link of the Niftyz platform linked to that asset.

```
[POST] {{GATEWAY}}/open/prepare

{
    "uuid": "<REQUEST_UUID>"
}
```

# Mint NFT

This endpoint can must be called to actually mint the NFT into an user's wallet.

```
[POST] {{GATEWAY}}/open/prepare

{
    "uuid": "<REQUEST_UUID>",
    "receiver": "<RECEIVER_EMAIL>"
}
```