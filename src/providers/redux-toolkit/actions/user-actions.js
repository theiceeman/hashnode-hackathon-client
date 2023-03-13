
import { convertAmountToUsd } from 'lib/general/helper-functions';
import { getUserTokenBalance } from 'lib/web3/methods';
import { connectToBrowserProvider, loadProvider } from 'lib/web3/script';
import tokens from '../../../components/_mock_/coin';



/* 
    get all supported tokens
        loop thru and get the balance for each
        convert each to usd
        add usd equiv. to total
    after loop: convert usd total to matic
 */
export const getUserTotalBalance = async () => {
    let total = 0;

    let provider = await loadProvider()
    let userAccount = await connectToBrowserProvider()
    for (let i = 0; i < tokens.length; i++) {
        let tokenBalance = await getUserTokenBalance(provider, userAccount, tokens[i].address)
        let usdEquiv = await convertAmountToUsd(tokens[i].id,tokenBalance)
        console.log({ 'yyyy': usdEquiv })
        total += Number(tokenBalance);

    }
    return total
}