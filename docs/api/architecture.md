---
sidebar_position: 1
---

# Architecture

Niftyz is an API first application, this means that we built everything having this approach in mind. We have two different core APIs:

- **Data Wallet**: which includes all the endpoints relative to wallets and accounts, available at: `https://wallet.niftyz.tools`.
- **Minting interface**: which includes all the endpoints relative to minting and NFTs, available at: `https://gateway.niftyz.tools`.

We'll refer with `DATA_WALLET` and `GATEWAY` when we'll explain all the endpoints one by one. 
Since we'll refer to NFTs should be better if you already known some of the basic concept behind this powerful technology, if not no worries, you can start from [here](./).

# Get access to API

Access to our API is free, however if you have any question or special need you can send us a formal request through our form.

# Accounts

Accounts in Niftyz are backed by wallets, this means that when you create an account on Niftyz you actually create an Ethereum wallet which will be used to publish and mint NFTs.

# NFTs

The standard we use for our NFTs is the popular [ERC-1155](https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/) with some additional features:

- **Soulbound tokens**: We can issue tokens which cannot be transferred by the account who receives it (on-chain feature).
- **Mint limits**: We can issue tokens which can be minted only by specific accounts (off-chain feature).
- **Locked contents**: We can issue tokens with up to 3 locked contents (links or files), which can be unlocked only by one of the owners (mix of on-chain and on-chain feature).

# Storage

Niftyz uses first-class AWS S3 storage to protect and save data in the cloud because of the powerful access control features natively ready to be used. 
In any case you can add other links and protect informations using your own systems since use our storage is not mandatory.