const RPC_URL = ""




const config = {
  title: 'NFT Minting Dapp',
  description: 'Minting site for NFTs',
  contractAddress: '0xc3480D8578A9E0099ADD9fF87da48051Aaf3e139',
  maxMintAmount: 10,
  presaleMaxMintAmount: 3,
  price: 0.01
}

const onBoardOptions = {
  dappId: 'd9f27de5-e090-457c-b2fa-eca466c934e3',
  networkId: 4, //rinkbey testnet
  walletSelect: {
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },

      {
        walletName: 'walletLink',
        preferred: true,
        appName: 'NFT-Minting-app',
        appUrl: APP_URL,
        email: CONTACT_EMAIL,
        rpcUrl: RPC_URL
      },

      { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },

      { walletName: 'authereum' },

      { walletName: 'gnosis', preferred: true },

      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: NFT - Minting - Dapp
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL
      },
      // {
      //   walletName: 'fortmatic',
      //   apiKey: FORTMATIC_KEY,
      //   preferred: true
      // }
    ]
  }
}

export { config }
