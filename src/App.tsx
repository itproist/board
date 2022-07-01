import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthContainer from './containers/AuthContainer';
import RegContainer from './containers/RegContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import PageWrapper from './components/common/PageWrapper';
import MainContainer from './containers/MainContainer';
import AdContainer from './containers/AdContainer';
import ItemContainer from './containers/ItemContainer';
import AuthHOC from './components/HOC/index';
import SearchContainer from './containers/SearchContainer';
import AddContainer from './containers/AddContainer';
import ViewPages from './components/pages/ViewPages';
import ViewContainer from './containers/ViewContainer';
import RepairContainer from './containers/RepairContainer';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<MainContainer />} />
          <Route path="reg" element={<RegContainer />} />
          <Route path="auth" element={<AuthContainer />} />
          <Route
            path="ad"
            element={
              <AuthHOC>
                <AdContainer />
              </AuthHOC>
            }
          />
          <Route path="/posts/1" element={<ItemContainer />} />
          <Route path="add" element={<AddContainer />} />
          <Route path="search-results" element={<SearchContainer />} />
          <Route path="view" element={<ViewContainer />} />
          <Route path="repair" element={<RepairContainer />} />
          <Route path="*" element={<NotFoundContainer />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
