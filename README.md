# content-hash for ipns-ns

This is a hack for encoding content hashe for ipns as specified in the [EIP 1577](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1577.md)

Based on https://github.com/pldespaigne/content-hash and https://github.com/ensdomains/ui/

Normaly you would just use https://app.ens.domains/ for this, but DXdao, as the owner of dxd.eth needs to vote on this and push this on-chain with a proposal.

Made for [DXdao](https://dxdao.eth.link/#/)

## Install

**npm** :
	```bash
	$> npm install content-hash
	$> npm install bs58
	```

or:
	```bash
    $> install.sh
	```

## Run

1. change text string to your string:
    
    ```const text = 'ipns://storage.snapshot.page/registry/0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c/dxd.eth'```
    
2. run with ```node run.js```

3. output:
```
Content to encode: storage.snapshot.page/registry/0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c/dxd.eth
contentType: ipns
Encoded ipns path: 0xe5010170005173746f726167652e736e617073686f742e706167652f72656769737472792f3078354130623534443564633137653041616443333833643264623433423061304433453032396334632f6478642e657468
Reverse as test: storage.snapshot.page/registry/0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c/dxd.eth
```