
import { convertAmountToUsd } from 'lib/general/helper-functions';
import { useDispatch, useSelector } from 'react-redux';
import { decimal, getUserTokenBalance } from 'lib/web3/methods';
import { connectToBrowserProvider, loadProvider } from 'lib/web3/script';
import tokens from '../../../components/_mock_/coin';
import { setWalletTokens } from '../reducers/user.reducer';



export const getUserTotalBalanceinUsd = async () => {
    let totalInUsd = 0;

    let provider = await loadProvider()
    let userAccount = await connectToBrowserProvider()
    for (let i = 0; i < tokens.length; i++) {
        let tokenBalance = await getUserTokenBalance(provider, userAccount, tokens[i].address)
        let tokenDecimal = await decimal(provider, tokens[i].address)
        let usdEquiv = await convertAmountToUsd(tokens[i].id, tokenBalance / 10 ** Number(tokenDecimal))
        totalInUsd += Number(usdEquiv);
    }
    return totalInUsd
}

