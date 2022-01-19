import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import SearchRepositoriesList from './components/SearchRepositoriesList'

const App: FC = () => {
  return (
    <Provider store={store}>
      <h1>Search NPM for a Packeage</h1>
      <SearchRepositoriesList />
    </Provider>
  );
};

export default App;