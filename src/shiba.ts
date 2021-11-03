import web3 from './web3';
import ABI from './abi/Shiba.json';

const contractAddress = "0x6a08e1D5160E204fC4648B13b9E7b0E05554D7C5";
// @ts-ignore
export default new web3.eth.Contract(ABI, contractAddress);