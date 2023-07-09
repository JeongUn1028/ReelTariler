import React from 'react';
import Header from './components/movieComponent/Header';
import Movies from './components/movieComponent/Movies';
import Footer from './components/movieComponent/Footer';
import Select from './components/movieComponent/Select';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NowPlaying from './pages/NowPlaying';
import UpComings from './pages/UpComings';
import Otts from './pages/Otts';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Select />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/nowplayings" element={<NowPlaying />} />
          <Route path="/upcomings" element={<UpComings />} />
          <Route path="/otts" element={<Otts />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
