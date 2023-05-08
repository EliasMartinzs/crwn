import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/Sign-In/Sign-in';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
