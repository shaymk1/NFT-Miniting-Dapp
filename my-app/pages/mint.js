export default function Mint() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen overflow-hidden bg-brand-background ">
      <div className="relative flex flex-col items-center justify-center w-full h-full">
        <img
          src="/images/blur.jpeg"
          className="absolute inset-auto block object-cover w-full min-h-screen animate-pulse-slow"
        />
        <div className="flex flex-col items-center justify-center w-full h-full px-2 md:px-10">
          <div className="relative flex flex-col items-center w-full px-2 py-4 rounded-md z-1 md:max-w-3xl bg-gray-900/90 filter backdrop-blur-sm md:px-10">
            <h1 className="mt-3 text-3xl font-bold uppercase font-coiny md:text-4xl text-brand-purple">
              Pre-Sale
            </h1>
            <h3 className="text-sm tracking-widest text-pink-200">
              0xc3480D8578A9E0099ADD9fF87da48051Aaf3e139
            </h3>
            <div className="flex flex-col w-full mt-10 md:flex-row md:space-x-14 md:mt-14">
              <div className="relative w-full">
                <div className="absolute z-10 flex items-center justify-center px-4 py-2 text-base font-semibold text-white bg-black border rounded-md font-coiny top-2 left-2 opacity-80 filter backdrop-blur-lg border-brand-purple">
                  <p>
                    <span className="text-brand-pink">0</span> / 222
                  </p>
                </div>

                <img
                  src="/images/13.png"
                  className="object-cover w-full sm:h-[280px] md:w-[250px] rounded-md"
                />
              </div>

              {/*right side */}

              <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                <div className="flex items-center justify-between w-full font-coiny">
                  <button className="flex items-center justify-center h-10 font-bold bg-gray-300 rounded-md w-14 md:w-16 md:h-12 text-brand-background hover:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>

                  <p className="flex items-center justify-center flex-1 text-3xl font-bold text-center grow text-brand-pink md:text-4xl">
                    1
                  </p>

                  <button className="flex items-center justify-center h-10 font-bold bg-gray-300 rounded-md w-14 md:w-16 md:h-12 text-brand-background hover:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 md:h-8 md:w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                </div>

                <p className="mt-3 text-sm tracking-widest text-pink-200">
                  Max Mint Amount:5
                </p>

                {/*total price */}
                <div className="w-full py-4 mt-16 border-t border-b">
                  <div className="flex items-center justify-between w-full text-xl font-coiny text-brand-yellow">
                    <p>Total</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <p className="text-brand-blue">
                      0.01 <span className="text-gray-400">ETH</span>
                    </p>
                    <span className="text-brand-green">+ Gas</span>
                  </div>
                </div>
              </div>
              {/*mint button */}
              <button className="w-full px-6 py-3 mx-4 mt-12 text-2xl tracking-wide text-white uppercase rounded-md shadow-lg font-coiny bg-gradient-to-br from-brand-purple to-brand-pink hover:shadow-pink-400/50">
                Connect Wallet
              </button>
            </div>
          </div>
          {/* Status */}

          <div className=" border border-brand-pink-400  rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-4">
            <p className="flex flex-col space-y-2 text-white text-sm md:text-base break-words ...">
             Something went wrong here!
            </p>
          </div>
          {/*contract address */}
          <div className="flex flex-col items-center w-full py-2 mt-10 border-t border-gray-800">
            <h3 className="mt-6 text-2xl uppercase font-coiny text-brand-pink">
              Contract Address
            </h3>
            <a
              href="https://rinkeby.etherscan.io/address/"
              className="mt-4 text-gray-400"
              target="_blank"
            >
              <span className="break-all ...">
                0xc3480D8578A9E0099ADD9fF87da48051Aaf3e139
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
