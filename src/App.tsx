import React, { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'LeBron James',
      age: 36,
      url: '',
      note: 'Alllegric',
    },
  ]);

  return (
    <div className="App">
      <List people={people}></List>
    </div>
  );
}

export default App;
