import {
    createThirdwebClient,
    getContract,
    resolveMethod,
  } from "thirdweb";
  import { defineChain } from "thirdweb/chains";
  import { ThirdwebProvider } from "thirdweb/react";
  
  // create the client with your clientId, or secretKey if in a server environment
  export const client = createThirdwebClient({
    clientId: "0x4eb318da0ea884122db79c71d86c950f95a51e30",
  });
  
  // connect to your contract
  export const contract = getContract({
    client,
    chain: defineChain(11155111),
    address: "0x4EB318Da0ea884122DB79c71D86c950f95A51E30",
  });
  
  function App() {
    return (
      <ThirdwebProvider>
        <Component />
      </ThirdwebProvider>
    );
  }
  