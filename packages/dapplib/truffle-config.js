require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet release stick pupil install open fringe south'; 
let testAccounts = [
"0x231265edf13352baf1e7e5e91eebed077ae013212113350f7f340bb7fb7279ca",
"0x7964674cb58b0522475b8e3befbb1d9b3cd0263972dc1900b889958d22fe5b5e",
"0xcb8dedd426b0480464f4a4bd8f3bf5a9e313e49b396b2743d61749f05f2df386",
"0xef344a62acffd4217118530f17ee28252392a33151f85a22367900fff13206bb",
"0xfe7ae839acb8c93a4523e9ded052a1fe4f7e7d6b992eabd3f0c9e6000a3ff285",
"0x7fbc8d1bff6e1d825ef3d29e3861b7be12ca367fe4bb5501bceadaa12c77ea42",
"0xfa561fe436bbb26b7b6e8fd7a74d17a395655b06f7cb34ce461214517fc66b6d",
"0xb79997086c11d40a84e055fa56cd4142981b39c2dd8858e894536c858efe5e3f",
"0x3abc231333e70df04ca0f9f572202497140b65097c8e6cdedd953072cbce8398",
"0x1c42ebf45c22910860718b7d884adfc3e82778712db59d6f40c07ec1bd8018cc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


