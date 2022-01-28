
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
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Article4 from './Article4';
import Article5 from './Article5';
import Article6 from './Article6';

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
         <Route path="/Article1" element={<Article1 />}/>
         <Route path="/Article2" element={<Article2 />}/>
         <Route path="/bollywood/Article3" element={<Article3 />}/>
         <Route path="/hollywood/Article3" element={<Article3 />}/>
         <Route path="/technology/Article4" element={<Article4 />}/>
         <Route path="/fitness/Article5" element={<Article5 />}/>
         <Route path="/food/Article6" element={<Article6 />}/>

       </Routes>
    
       
  </Router>
  );
}

export default App;
