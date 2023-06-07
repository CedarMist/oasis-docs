---
description: CLI instructions for deploying GSN on Sapphire Testnet
---
# Gas Station Network

[Gas Station Network](https://docs.opengsn.org) is very useful for improving user experiences of many Dapps by making their users send transactions without having native tokens for gas. We make GSN functionalities available on Sapphire Paratime.

### Package Install

Starting with an empty folder, let us install the [Oasis fork](https://github.com/oasislabs/gsn) of the GSN command line tool by using the following commands:

```shell
npm init -y
npm install --save-dev @oasislabs/opengsn-cli 
```

### Deploy GSN Contracts

We can deploy GSN contracts by the following command. Remember to replace with your own private key and account address in it.

```shell
npx gsn deploy --network sapphire_testnet --burnAddress 0xfA3AC9f65C9D75EE3978ab76c6a1105f03156204 --devAddress 0xfA3AC9f65C9D75EE3978ab76c6a1105f03156204 --testToken true --testPaymaster true --yes --privateKeyHex '8a61cab2fd89c40c0f87275f2547bf0139fe78c4aa37eed0ee4357ce88033aae'
```

After the command finishes successfully, you should find the addreses of deployed contracts at the end:

```
  Deployed TestRecipient at address 0x594cd6354b23A5200a57355072E2A5B15354ee21
  
  RelayHub: 0xc4423AB6133B06e4e60D594Ac49abE53374124b3 
  RelayRegistrar: 0x196036FBeC1dA841C60145Ce12b0c66078e141E6
  StakeManager: 0x6763c3fede9EBBCFbE4FEe6a4DE6C326ECCdacFc
  Penalizer: 0xA58A0D302e470490c064EEd5f752Df4095d3A002
  Forwarder: 0x59001d07a1Cd4836D22868fcc0dAf3732E93be81
  TestToken (test only): 0x6Ed21672c0c26Daa32943F7b1cA1f1d0ABdbac66
  Paymaster (Default): 0x8C06261f58a024C958d42df89be7195c8690008d
```


### Start GSN Relay Server

Now we are ready to start our own relay server locally or publicly by using the following command:

```shell
npx gsn relayer-run --relayHubAddress 0xc4423AB6133B06e4e60D594Ac49abE53374124b3 --managerStakeTokenAddress  0x6Ed21672c0c26Daa32943F7b1cA1f1d0ABdbac66 --ownerAddress '0xfA3AC9f65C9D75EE3978ab76c6a1105f03156204' --ethereumNodeUrl 'https://testnet.sapphire.oasis.dev' --workdir .
```

Remember to replace the `relayHubAddress` and `managerStakeTokenAddress` with your newly deployed addresses of RelayHub and TestToken contracts.

### Fund and Register GSN Relay Server

The first thing is to fund your relay server so that it has enough native tokens to pay for others' transactions:

```shell
npx gsn paymaster-fund --network sapphire_testnet --hub 0xc4423AB6133B06e4e60D594Ac49abE53374124b3 --paymaster 0x8C06261f58a024C958d42df89be7195c8690008d --privateKeyHex '8a61cab2fd89c40c0f87275f2547bf0139fe78c4aa37eed0ee4357ce88033aae' --amount 5000000000000000000
```

Then, we need to register the relay server with the your desired `relayUrl` by staking the `token` the relayHub requires.

```shell
npx gsn relayer-register --network sapphire_testnet --relayUrl 'http://localhost:8090' --token 0x6Ed21672c0c26Daa32943F7b1cA1f1d0ABdbac66 --wrap true --privateKeyHex '8a61cab2fd89c40c0f87275f2547bf0139fe78c4aa37eed0ee4357ce88033aae'
```

After this step, your relay server should be ready to take incoming relay requests and then forward to the relayHub on Sapphire Testnet.

### Send Testing Relayed Requests:

We can test whether a relayed request can be forwarded and processed correctly by using the following command:

```shell
npx gsn send-request --network sapphire_testnet --abiFile 'node_modules/@oasislabs/opengsn-cli/dist/compiled/TestRecipient.json' --method emitMessage --methodParams 'hello world!' --to 0x594cd6354b23A5200a57355072E2A5B15354ee21 --paymaster 0x8C06261f58a024C958d42df89be7195c8690008d --privateKeyHex '8a61cab2fd89c40c0f87275f2547bf0139fe78c4aa37eed0ee4357ce88033aae' --from 0xfA3AC9f65C9D75EE3978ab76c6a1105f03156204 --gasLimit 150000 --gasPrice 100
```

:::info

More detailed explanations of these GSN commands and parameters can be found at the [ethereum GSN](https://docs.opengsn.org/javascript-client/gsn-helpers.html).

:::
