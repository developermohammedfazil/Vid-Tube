import React, { useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <div className="app-layout">
      <Navbar setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} category={category} setcategory={setCategory} />
      <div className={`main-content ${sidebar ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
