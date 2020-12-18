const contentHash = require('content-hash');
const bs58 = require('bs58');

// code mostly from
// from https://github.com/ensdomains/ui/blob/2efc6dcb4b5f30d950fd96c57ef91153deeb8f8f/src/utils/contents.js

const text = 'ipns://storage.snapshot.page/registry/0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c/dxd.eth'

let matched = text.match(/^(ipfs|ipns|bzz|onion|onion3):\/\/(.*)/) || text.match(/\/(ipfs)\/(.*)/) || text.match(/\/(ipns)\/(.*)/)

if (matched) {
  contentType = matched[1]
  content = matched[2]
  console.log('Content to encode: '+content);
  console.log('contentType: '+contentType);
}

let bs58content = bs58.encode(
          Buffer.concat([
            Buffer.from([0,content.length]),
            Buffer.from(content)
          ])
        )

encoded = '0x' + contentHash.encode('ipns-ns', bs58content);
console.log('Encoded ipns path: '+encoded);

// reverse as test 

decoded = contentHash.decode(encoded)
const codec = contentHash.getCodec(encoded)
decoded = bs58.decode(decoded).slice(2).toString()

console.log('Reverse as test: '+decoded);