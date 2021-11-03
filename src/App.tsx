import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'; 
import styled from 'styled-components'
import { colors } from './styles'
import Home from "../src/pages/Home";
import Battle from './pages/Battle';
import Faucet from './pages/Faucet';
import Inventory from './pages/Inventory';
import MarketPlace from './pages/MarketPlace';
import MysteryBox from './pages/MysteryBox';
import NFTStaking from './pages/NFTStaking';
const useStyles = makeStyles((theme) => ({
  main: {
    border: '1px solid transparent',
    width: '100%',
  },
}));
 
let totalprice = 0;
 
function App() {
  
  return (
     <div>
       <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path='/inventory'>
              <Inventory />
          </Route>   
          <Route path="/faucet">
              <Faucet />
          </Route>   
          <Route path="/market-place">
              <MarketPlace />
          </Route>   
          <Route path="/mystery-box">
              <MysteryBox />
          </Route>   
          <Route path="/nft-staking">
              <NFTStaking />
          </Route>   
          <Route path="/battle">
              <Battle />
          </Route>       
        </Switch>
      </BrowserRouter>
     </div>
  )
}

export default App
