## use `L2StandardTokenFactory`

You don't have to use this contract template.

there is already an [L2StandardTokenFactory](https://andromeda-explorer.metis.io/address/0x4200000000000000000000000000000000000012/write-contract#address-tabs) contract, 

you can call the `createStandardL2Token` method with correct parameters to to create an L2 token directly.

## Create your own L2 standard token

A standard bridge token should implement [IL2StandardERC20](./contracts/interfaces/IL2StandardERC20.sol) interface.

There is a [sample contract](./contracts/L2StardardERC20.sol) that you can use directly or [modify according to your needs](./contracts//L2CustomERC20.sol).

## Deploy

### install dependencies

```
yarn
```

### Edit `.env` file

```
PRIVATE_KEY=YOUR WALLET PRIVATE KEY TO DEPLOY
L1_TOKEN_ADDRESS=YOUR L1 TOKEN ADDRESS
L2_TOKEN_NAME=YOUR L2 TOKEN NAME
L2_TOKEN_SYMBOL=YOUR L2 TOKEN SYMBOL
```

### Run deploy script

```console
$ yarn deploy
Nothing to compile
No need to generate any newer typings.
l1token 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
l2bridge 0x4200000000000000000000000000000000000010
l2TokenName EXAMPLE
l2TokenSymbol EXAMPLE
deploying "L2StandardERC20" (tx: 0xbf83264ae052f0b3ff08d5b8d1ae17967ababa97798b18aa21450d6f5b88bf94)...: deployed at 0xd064B7c6452408873a7bC3a92144d621247571fD with 17821805 gas
Done in 5.88s.
```
