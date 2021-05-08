require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index remember pizza minor grace opera bottom travel'; 
let testAccounts = [
"0xe8fbb46094be644170f97beaa58aa57fae5e9c04d74cdc24f32c0c8821c9272a",
"0x33779d924c4364769538a99c69087d6d77f93c13d69e3c0071075bec8ac88c51",
"0x814126d2d749431cb346804877bc1c44e6ce40e64a5c5e084bc9e54a59fd9f1a",
"0x1b10e32e3ec6dc139853e8c182684674400ebf333ea640681c1eaf6eec2064fb",
"0xec26beff752bf92e3787ade8194cdcaf4e1970ae3a38143cb1b6e24beaebad4c",
"0x11a058caa21197828f66d7929e205ed6ed3c320e3552a08458b657f268ee2561",
"0x0eb45687dd20ac9c232a16f3537bb73f969a57b5135647a86eed64ba2ccfc149",
"0xc816b9e4bbc00489fe77e6707c8bc41c7552a229d0b9d567e84307ff65d61f25",
"0xf30deac7ca1e45a3e2f3505b458e6283553b4bdcb1248fbb2b2a017abdd10ae5",
"0xb41c574e2cfc510939e4b748d8022e8821b31640e88a319401bec8f4b11c925d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

