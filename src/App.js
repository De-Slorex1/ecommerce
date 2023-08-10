import './categories.css';
import Directory from './components/directory/directory.component';
import NavLink from './components/navigation/nav-link.component';
import ShopList from './components/navigation/shop.component';
import Contact from './components/navigation/contact.component';
import SignIn from './components/navigation/signIn.component';
import {Routes, Route} from 'react-router-dom';


const App = () => {

  const categories = [
      {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        id: 5,
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
      },
      {
        id: 6,
        title: "hats",
        imageUrl: "https://i.ibb.co/brD5GtL/pexels-ylanite-koppens-934063.jpg"
      },
      {
        id: 7,
        title: "jackets",
        imageUrl: "https://i.ibb.co/HgQ4kMC/pexels-pixabay-267202.jpg"
      },
      {
        id: 8,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/TgtXg2s/pexels-terje-sollie-298863.jpg"
      },
  ]
  return ( 
    <div>
      <Routes>
            <Route path='/' element={<NavLink />}>
            <Route index element={<Directory categories={categories} />} />
            <Route path='/shop' element={<ShopList />}  />
            <Route path='/signIn' element={<SignIn />}  />
            <Route path='/contact' element={<Contact />} />
          </Route>
      </Routes>
    </div>  
  )
}
 
export default App;