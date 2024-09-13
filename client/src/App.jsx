import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Pages/Home';
import Example from './Pages/Example';
import LoginPage from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Finance from './Pages/Finance';
import Games from './Pages/Games';
import CreateAdd from './Pages/CreateAdd';
import EditAdd from './Pages/EditAdd';
import MGList from './Pages/MGList';
import Sales from './Pages/Sales';
import Buy from './Pages/Buy';

import Albion from './Pages/GameList/Albion';

import MGEmoji from './Pages/MGList/MGEmoji';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/Example" element={<Layout><Example/></Layout>} />
        <Route path="/profile" element={<Layout><Profile/></Layout>} />
        <Route path="/finance" element={<Layout><Finance/> </Layout>}/>
        <Route path="/games" element={<Layout><Games/></Layout>} />
        <Route path="/createAdd" element={<Layout><CreateAdd/></Layout>} />
        <Route path="/editAdd" element={<Layout><EditAdd/></Layout>} />
        <Route path="/mini-games" element={<Layout><MGList/></Layout>} />
        <Route path="/sales" element={<Layout><Sales/></Layout>} />
        <Route path="/buy" element={<Layout><Buy/></Layout>} />



        <Route path="/games/albion" element={<Layout><Albion /></Layout>} />



        <Route path="/mini-games/emoji-game" element={<Layout><MGEmoji /></Layout>} />
      </Routes>
    </Router>
  );
};

