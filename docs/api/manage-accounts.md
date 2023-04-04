---
sidebar_position: 2
---

# Manage accounts

In order to interact with Niftyz you first need an account, then the account can be used to sign messages, create requests etc.

# Create an account

In order to create an account simply send an `email` and a `password` in the body. The only requirement is that the password must match those requirements:
- *Length*: more than 8 characters
- *Special* characters: at least 1 character
- *Numbers*: at least 1 number
- *Uppercase*: at least 1 uppercase character

```
[POST] {{DATA_WALLET}}/wallets/new

{
    "email": "dev@niftyz.io",
    "password": "<A_STRONG_PASSWORD>"
}
```

# Check the account

In order to create activate the account you must check it using following endpoint:
```
[POST] {{DATA_WALLET}}/wallets/check

{
    "email": "dev@niftyz.io",
    "password": "<A_STRONG_PASSWORD>"
}
```

# Request unlock wallet

There's a lock system that protects from bruteforce the accounts. This means that after `12` attempts the wallet will be locked and cannot be used unless it's unlocked. 
The unlock process is done by e-mail and can be requested using following endpoint: 
```
[POST] {{DATA_WALLET}}/wallets/unlock-request

{
    "email": "dev@niftyz.io"
}
```

# Confirm unlocking

After the user receives the token in the e-mail the wallet is ready to be unlocked. While unlocking the wallet it is required to create a new password in order to encrypt again the private key with the new password.

```
[POST] {{DATA_WALLET}}/wallets/unlock-request

{
    "token": "<TOKEN_RECEIVED_BY_EMAIL>",
    "password": "<A_NEW_STRONG_PASSWORD>"
}
```

# Request the export of a key

A private key can be exported to be imported in a self-custodial wallet. The procedure is similar to the one mentioned above, you asks for the unlock, then you must confirm the unlock using the token received via e-mail.

```
[POST] {{DATA_WALLET}}/wallets/export-request

{
    "email": "dev@niftyz.io",
    "password": "<A_STRONG_PASSWORD>"
}
```

# Export key

After you receives the token in your e-mail you can use it to actually export the key. This operation can be done just once because the token will be immediatily burned.

```
[POST] {{DATA_WALLET}}/wallets/export

{
    "token": "<TOKEN_RECEIVED_BY_EMAIL>",
    "password": "<A_STRONG_PASSWORD>"
}
```