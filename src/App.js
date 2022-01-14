
import './App.css';
import Home from './Home';
import Header from './Header';
import Bollywood from './Bollywood';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Technology from './Technology';
import Hollywood from './Hollywood';
import Fitness from './Fitness';
import Food from './Food'
import './Styles.css';
import ViewMore from './HomeCompos/ViewMore';
import BLoadMore from './BollyCompos/BLoadMore';
import TLoadMore from './TCompos/TLoadMore';
import HLoadMore from './HollyCompos/HLoadMore';
import FMore from './FitCompos/FMore';
import FooMore from './FoodCompos/FooMore';
import Article from './Article';

function App() {
  return (
    <Router>
     <Header />
       <Routes>
         <Route path='' element={<Home />} />
         <Route path='/bollywood' element={<Bollywood />} />
         <Route path='/technology' element={<Technology />} />
         <Route path='/hollywood' element={<Hollywood />} />
         <Route path="/fitness" element={<Fitness />} />
         <Route path="/food" element={<Food />} />
         <Route path="/HomeCompos/ViewMore" element={<ViewMore />} />
         <Route path="/bollywood/BLoadMore" element={<BLoadMore />}/>
         <Route path="/technology/TLoadMore" element={<TLoadMore />}/>
         <Route path="/hollywood/HLoadMore" element={<HLoadMore />}/>
         <Route path="/fitness/FMore" element={<FMore />}/>
         <Route path="/food/FoodMore" element={<FooMore />}/>
         <Route path="/Article" element={<Article />}/>
         <Route path="/bollywood/Article" element={<Article />}/>
         <Route path="/hollywood/Article" element={<Article />}/>
         <Route path="/technology/Article" element={<Article />}/>
         <Route path="/fitness/Article" element={<Article />}/>
         <Route path="/food/Article" element={<Article />}/>

       </Routes>
    
       
  </Router>
  );
}

export default App;
