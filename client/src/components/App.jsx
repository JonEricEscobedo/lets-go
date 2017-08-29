import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="container">

        <header>
          <h1 className="display-1 hero">LET'S GO</h1>
        </header>

        <nav>
          <Search />
        </nav>

        <section>
          <Dashboard />
        </section>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;
