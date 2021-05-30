import './App.css';
import { Switch , Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop.jsx';
import Header from './components/header/header.jsx';
import SignPage from './pages/sign-page/sign.jsx';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage}  />
      <Route path='/signin' component={SignPage}  />

    </Switch>
      
    </div>
  );
}

export default App;
