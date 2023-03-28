import Logo from "components/Logo";
import { Link } from "react-router-dom";
import { HiSun as SunIcon, HiMoon as MoonIcon } from "react-icons/hi";
import Darkmode from "components/Darkmode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "lib/general/helper-functions";
import { checkIfWalletIsConnected, connectToBrowserProvider, loadProvider } from "lib/web3/script";
import { setUserAddress, setUserProvider, setUserTotalBalance } from "providers/redux-toolkit/reducers/user.reducer";
import { setThemeMode } from "providers/redux-toolkit/reducers/theme-reducer";
import { getUserTotalBalance } from "providers/redux-toolkit/actions/user-actions";

const Navbar = ({ account }) => {
  const dispatch = useDispatch();
  const themeMode = getLocalStorage("user_theme");
  const [theme, setTheme] = Darkmode();
  const { themeMode: themeModeReducer } = useSelector(
    (state) => state.themeMode
  );
  const userAddress = useSelector(
    (state) => state.userAddress.userAddress
  )

  const connectWallet = async () => {
    let userAddress = await connectToBrowserProvider()
    if (userAddress) setUserAddress(userAddress)
  }

  const shortenAddress = (str) => {
    return str.substring(0, 8) + '...' + str.substring(str.length - 6)
  }


  useEffect(async () => {
    setTheme(themeMode);
  });

  return (
    <>
      <nav className="bg-white dark:bg-nature-800 px-4 py-4">
        <div className="relative flex items-center justify-between mx-auto">
          <div className="flex items-center">
            <Link to="/" className="flex">
              <Logo theme={theme} />
            </Link>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-8 lg:flex">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-sm p-1.5 mr-1 lg:mr-4"
              onClick={() => {
                dispatch(setThemeMode(theme === "dark" ? "light" : "dark"));
              }}
            >
              {theme === "dark" ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </button>
            {/* <ConnectWallet
							fontFamily={'Dm Sans, sans-serif'}
							borderRadius={'3xl'}
							className='dark:text-white '
						/> */}
            {!userAddress ? (
              <button
                onClick={() => connectWallet()}
                className="bg-norm-blue hover:bg-norm-dblue border-none px-4 py-2 shadow-2xl rounded-3xl text-base leading-6 text-white font-dm-sans font-medium"
              >
                Connect Wallet
              </button>
            ) : (
              <button className="bg-norm-blue hover:bg-norm-dblue border-none px-4 py-2 shadow-2xl rounded-3xl text-base leading-6 text-white font-dm-sans font-medium">
                {shortenAddress(userAddress)}
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
