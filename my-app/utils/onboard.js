import { init } from '@web3-onboard/react'


const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL
const fortmatic = process.env.NEXT_PUBLIC_FORTMATIC_KEY


const initOnboard = init({

})

export { initOnboard }
