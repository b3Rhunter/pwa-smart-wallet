import { useState } from 'react'
import { CoinbaseWalletSDK } from '@coinbase/wallet-sdk';
import './App.css'

function App() {
  const [connected, setConnected] = useState(false)

  const connect = async () => {
    try {
      const sdk = new CoinbaseWalletSDK({
        appName: 'My Dapp',
        appChainIds: [84532],
      });
      const provider = sdk.makeWeb3Provider();
      const address = await provider.request({
        method: 'eth_requestAccounts',
      });
      console.log(address)
      setConnected(true)
    } catch (error) {
      console.error(error)
    }
  }

  const disconnect = async () => {
    try {
      setConnected(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='app'>
      <h1>Smart Wallet</h1>
      {!connected && <button onClick={connect}>connect</button>}
      {connected && <button onClick={disconnect}>disconnect</button>}
    </div>
  )
}

export default App
