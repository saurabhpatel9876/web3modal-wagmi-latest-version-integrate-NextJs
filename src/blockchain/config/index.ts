import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage,http } from 'wagmi'
import { mainnet, sepolia,bsc,fantom,bscTestnet } from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = '6b96e7ab212fc76eb161931ea5b82a20'
if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
const chains = [mainnet, sepolia,bsc,fantom,bscTestnet] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bscTestnet.id]: http('https://data-seed-prebsc-1-s1.binance.org:8545'),
  },
  storage: createStorage({
    storage: cookieStorage
  }),

})