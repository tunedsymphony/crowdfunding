import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const activeChain = {
  chainId: 11155111,
  rpc: ["https://eth-sepolia.g.alchemy.com/v2/8DbZqD19SH374GetQk0SxWEOQ6cCNf_a"], 
  nativeCurrency: { name: "Sepolia ETH", symbol: "ETH", decimals: 18 },
  shortName: "sepolia",
  slug: "sepolia",
  testnet: true,
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider  clientId='44ade47f4851f1a3d789f3dfeb715c36' supportedChains={[activeChain]} desiredChainId={11155111}> 
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider> 
)


