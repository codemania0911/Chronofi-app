import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import InventoryPage from '../components/LaunchApp/Inventory';
import MysteryBoxPage from '../components/LaunchApp/MysteryBox';
import MarketPlacePage from '../components/LaunchApp/MarketPlace';
import NFTStakingPage from '../components/LaunchApp/NFTStaking';
import FaucetPage  from '../components/LaunchApp/Faucet';
import ScreenWrapper from '../components/LaunchApp/ScreenWrapper'
import BattlePage from "../components/LaunchApp/Battle"
import styled from 'styled-components'
import { colors } from '../styles'
import shibaAbi from '../abi/Shiba.json'
// import shibaContract from './shiba';
import Web3 from 'web3';

const useStyles = makeStyles((theme) => ({
  main: {
    border: '1px solid transparent',
    width: '100%',
  },
}));

const OutlineButton = styled.button`
    padding:0 30px;
    height: 70px;
    border-radius: 5px;
    color: rgb(${colors.fontColor});
    font-size:28px;
    background: #D35BFF;
    @media (max-width: 720px) {
        height: 50px;
        width:80%;
        font-size:20px;
    }
    @media (max-width: 510px) {
        width:80%;
        height: 50px;
        padding:0 10px;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const OutlineButton1 = styled.button`
    width: 263px;
    height: 75px;
    border-radius: 5px;
    color: rgb(${colors.fontColor});
    font-size:46px;
    background: #D35BFF;
    margin: 50px 0;
    transition: all 0.2s ease-out;
    @media (max-width: 720px) {
        width: 150px;
        height: 50px;
        font-size:25px;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const Title = styled.p`
    color: white;
    font-size: 36px;
    margin-top:60px;
`

let totalprice = 0;

declare global {
  interface Window { ethereum: any; }
  interface Window { web3: any; }
}

const contractAddress = "0x6a08e1D5160E204fC4648B13b9E7b0E05554D7C5";

function Inventory() {
  const classes = useStyles();
  const [contract, setContract] = useState(0);
  const [amount, setAmount] = useState(0);
  const [maxNum, setMaxNum] = useState(0);
  const [itemPrice, setItemPrice] = useState(0);
  const [ownEthValue, setOwnEthValue] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [myaccount, setMyaccount] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [limitItemNum, setLimitItemNum] = useState(0);
  const [autoNem, setAutoNum] = useState(0);
  const [accountID, setAccountId] = useState("Connect");

  useEffect(() => {

  }, [localStorage.getItem('storeName') == "true"])

  const connectMetaMask = async () => {
    console.log("==============")
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      getInitialValue()
      getAccountId()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      getInitialValue()
      getAccountId()
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  const getAccountId = async () => {
    localStorage.setItem('storeName', "true");
    const web3 = window.web3
    console.log("web3", web3.eth)
    // Load account
    const accounts = await web3.eth.getAccounts()
    var id = accounts[0];
    var lastFive = id.substr(id.length - 4); // => "Tabs1"
    var firsttChar = id.slice(0, 6); // => "1"
    var tempID = firsttChar + "..." + lastFive;
    setAccountId(tempID)
    getInitialValue();
  }

  const getInitialValue = async () => {
    const web3 = window.web3
    console.log("web3", web3.eth.net.getId())
    // Network ID
    const networkId = await web3.eth.net.getId()
    if (networkId == 1) {
      const accounts = await web3.eth.getAccounts()
      setMyaccount(accounts[0])
      const ownAmount = await web3.eth.getBalance(accounts[0])
      const amountToEthe = Web3.utils.fromWei(ownAmount.toString(), 'ether');
      setOwnEthValue(parseFloat(amountToEthe));
      const shibaContract = new web3.eth.Contract(shibaAbi, contractAddress);
      const maxNFT = await shibaContract.methods.BUY_LIMIT_PER_TX().call();
      const limitNum = await shibaContract.methods.MAX_NFT().call();
      setLimitItemNum(limitNum)
      const nFTPrice = await shibaContract.methods.NFTPrice().call();
      const totalsupply = await shibaContract.methods.totalSupply().call();
      console.log("totalsupply==", totalsupply)
      console.log("maxNFT===", maxNFT)
      setMaxNum(parseInt(maxNFT))
      setItemPrice(parseFloat(nFTPrice))
      setTotalSupply(totalsupply)
    } else {
      window.alert('Choose Ethereum Network in your Wallet.')
    }
  }


  const buyHandler = async () => {
    if (totalPrice == 0) {
      window.alert("Please select item quantity.")
    } else if (ownEthValue < totalPrice) {
      window.alert("You don't have the Ethe you selected.")
    } else {
      const web3 = window.web3
      const shibaContract = new web3.eth.Contract(shibaAbi, contractAddress);
      await shibaContract.methods.mintNFT(amount).send({ from: myaccount, value: Web3.utils.toWei(totalPrice.toString(), "ether") })
      getInitialValue()
      setAmount(0)
      totalprice = 0;
      setTotalPrice(0);
    }
  }
  const updateUI = () => {
    console.log("sdfsdfsdfsd")
    setContract(contract + 1)
  }

  return (
    <ScreenWrapper>            
        <InventoryPage />
     
    </ScreenWrapper>
  )
}

export default Inventory
