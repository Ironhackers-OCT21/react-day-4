import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom'
import Profile from './components/Profile';
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';

function App(){
  // Inline styling with camelCasing
  return (
    <div style={{display: 'flex'}}>
      <PokemonList />
      <Routes>
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  )
}


//--------------------------------------------------------------
//          Learning routes v6 before the break 
//--------------------------------------------------------------


// function App() {
//   return (
//     <div >
//       <Nav />
//       <Routes>
//           {/* 404 page route */}
//           <Route path="*" element={<NotFound />} />

//           {/* Simple routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/profile" element={ <Profile /> } />
//           <Route path="/about" element={<About />} />

//           {/* Dynamic routes */}
//           <Route path="/profile/:someId" element={ <Profile age={21}/> } />
          

//           {/* ------------------------------------------------ */}
//            {/* Danger zone for now */}
         
//           {/* Rendering multiple components together with Outlets */}
//             {/*
//             <Route path="/profile" element={<About />}>
//               <Route path=":someId" element={<Profile />} />
//             </Route>
//             */}

//           {/* Rendering multiple components individually */}
//            {/*
//             <Route path="/profile">
//               <Route index  element={<About />}/>
//               <Route path=":someId" element={<Profile />} />
//             </Route>
//              */}
//          {/* ------------------------------------------------ */}

//       </Routes>

//     </div>
//   );
// }

//--------------------------------------------------------------
//          
//--------------------------------------------------------------

export default App;
