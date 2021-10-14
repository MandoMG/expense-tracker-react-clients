import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavigationMenu from './components/NavigationMenu';

function App() {

  return (
    <div>
      <NavBar />
      <div className="AppMenuContentWrapper">
        <NavigationMenu />
        <div style={{ flex: 4, margin: 15 }}>
          <div>
            <div>
              <h5>Current Balance</h5>
              <h3>$1420.69</h3>
            </div>
            <div>
              <div>
                <h5>Income</h5>
                <h3>$2000.00</h3>
              </div>
              <div>
                <h5>Expense</h5>
                <h3>$579.31</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
