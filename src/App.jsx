import { useContext } from 'react';

import { DataContext } from './Providers/Data'

function App() {
  const {
    data, isLoadingData
  } = useContext(DataContext)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {isLoadingData ? 'I am loading data...' : 'Data has been loaded!'}
        </p>

        <p>
          {data ? 'did I get it' : 'I dont go it'}
        </p>
        <p>
          {data.name}
        </p>
      </header>
    </div>
  );
}

export default App;