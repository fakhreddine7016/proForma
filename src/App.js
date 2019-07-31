import React from 'react'

import SearchPage from './component/SearchBar/searchBar';
import Footer from './component/footer/Footer'
import TextFields from './component/Blog/BLOG'
import Formation from './component/Lastpage/LASTPAGE'
import InfoFormation from './component/infopage/INFOPAGE'
import ClimaFormation from './component/Climpage/Clima'
import NewCard from'./component/newcard/card'
import './App.css';
import {Countries,FindInformation} from './component/pagemeca/Cardmeca';
import {BrowserRouter, Route}  from "react-router-dom"








function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <SearchPage/>
      <Footer/> */}
      <Route exact path="/" component={Countries} />
      <Route path="/info" component={FindInformation}/>
      {/* <Formation/>
      <TextFields/>
      <InfoFormation/>
      <ClimaFormation/>
    <NewCard/> */}
    
    </div>
    </BrowserRouter>
  );
}

export default App;
