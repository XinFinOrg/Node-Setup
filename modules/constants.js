export const InfuraEndpoints = {
  ethereum: {
    http: {
      Main: 'https://testnet.xinfin.network',
      Ropsten: 'https://ropsten.infura.io/mist',
      Rinkeby: 'https://rinkeby.infura.io/mist',
      Kovan: 'https://kovan.infura.io/mist'
    },
    websockets: {
      Main: 'ws://62.233.65.7:8555',
      Ropsten: 'wss://ropsten.infura.io/ws/mist',
      Rinkeby: 'wss://rinkeby.infura.io/ws/mist',
      Kovan: 'wss://kovan.infura.io/ws/mist'
    }
  },
  ipfs: {
    gateway: 'https://ipfs.infura.io',
    rpc: 'https://ipfs.infura.io:5001'
  }
};
