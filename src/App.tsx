import './App.css';
import './ui/fonts/museoSansCyrl/museoSans.css'
import { Route, Routes } from 'react-router-dom';
import { Major } from './pages/major/organelles/Major';
import { Header } from './ui/header/organelles/Header';
import DefaultBackground from './assets/major/defaultBackground.png'
import { useState } from 'react';
export interface IBackground {
  image: string
}
function App() {
  const [value, setValue] = useState<IBackground>({ image: DefaultBackground })
  return (
    <div className="App" style={{ backgroundImage: `url(${value.image})` }}>
      <Header />
      <div className="App__Actual">
        <Routes>
          <Route path="/" element={<Major />} />
          <Route path='*' element={<Major />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
