import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SetUsersPage from './components/SetUsersPage';

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SetUsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
