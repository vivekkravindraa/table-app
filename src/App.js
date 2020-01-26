import React from 'react';
import Table from './Table';
import './App.css';

function App() {
  let data = [
    {
      name: 'Item',
      inputType: 'select'
    },
    {
      name: 'Material Fee',
      inputType: 'currency'
    },
    {
      name: 'Packing Fee',
      inputType: 'currency'
    },
    {
      name: 'Unpacking Fee',
      inputType: 'currency'
    }
  ]

  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
