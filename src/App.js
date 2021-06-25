import React from 'react';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

function App() {
  return (
    <div className="ui container grid" style={{margin:'20px'}}>
      <h3>Song List with functionality of viewing Song Detail</h3>
      <div className="ui row">
        <div className="column eight wide">
          <SongList/>
        </div>
        <div className="column eight wide">
          <SongDetail/>
        </div>
      </div>
    </div>
  );
}

export default App;
