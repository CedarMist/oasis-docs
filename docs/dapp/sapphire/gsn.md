---
description: CLI instructions for deploying GSN on Sapphire Testnet
---

### Package Install

```shell
npm install --save-dev @oasislabs/opengsn-cli 
```

### GSN Contracts Deployment


```shell
npx gsn deploy --network sapphire_testnet --burnAddress 0xfA3AC9f65C9D75EE3978ab76c6a1105f03156204 --devAddress 0xfA3AC9f65C9D75EE3978ab76c6a1105f03156204 --testToken true --testPaymaster true --yes --privateKeyHex '8a61cab2fd89c40c0f87275f2547bf0139fe78c4aa37eed0ee4357ce88033aae'
```

Then, you should find the addreses of deployed contracts at the end:

```shell
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

```shell
npx gsn relayer-run --relayHubAddress 0xc4423AB6133B06e4e60D594Ac49abE53374124b3 --managerStakeTokenAddress  0x6Ed21672c0c26Daa32943F7b1cA1f1d0ABdbac66 --ownerAddress '0xfA3AC9f65C9D75EE3978ab76c6a1105f03156204' --ethereumNodeUrl 'https://testnet.sapphire.oasis.dev' --workdir .
```

Remember to replace the relayHubAddress and StakeTokenAddress to your newly deployed addresses of RelayHub and TestToken contracts.

### Fund and Register Relay Server

Fund your relay server:

```shell
npx gsn paymaster-fund --network sapphire_testnet --hub 0xc4423AB6133B06e4e60D594Ac49abE53374124b3 --paymaster 0x8C06261f58a024C958d42df89be7195c8690008d --privateKeyHex '8a61cab2fd89c40c0f87275f2547bf0139fe78c4aa37eed0ee4357ce88033aae' --amount 5000000000000000000
```

Register your relay server:

```shell
npx gsn relayer-register --network sapphire_testnet --relayUrl 'http://localhost:8090' --token 0x6Ed21672c0c26Daa32943F7b1cA1f1d0ABdbac66 --wrap true --privateKeyHex '8a61cab2fd89c40c0f87275f2547bf0139fe78c4aa37eed0ee4357ce88033aae'
```

### Send Test Relayed Request:

```shell
npx gsn send-request --network sapphire_testnet --abiFile 'node_modules/@oasislabs/opengsn-cli/dist/compiled/TestRecipient.json' --method emitMessage --methodParams 'hello world!' --to 0x594cd6354b23A5200a57355072E2A5B15354ee21 --paymaster 0x8C06261f58a024C958d42df89be7195c8690008d --privateKeyHex '8a61cab2fd89c40c0f87275f2547bf0139fe78c4aa37eed0ee4357ce88033aae' --from 0xfA3AC9f65C9D75EE3978ab76c6a1105f03156204 --gasLimit 150000 --gasPrice 100
```

