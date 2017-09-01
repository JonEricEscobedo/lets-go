import React from 'react';
import ReactDOM from 'react-dom';

class ListingsEntries extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const styles = {
      highlight: {
        background: '#2BBBAD'
      }
    }
    
    return (
      <div>
      { this.props.highlight === this.props.result.id
        ? <div>
            <a className="list-group-item list-group-item-action flex-column align-items-start active" onClick={() => this.props.openWindow(this.props.index)}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this.props.result.name}</h5>
                  { this.props.result.opening_hours.open_now
                    ? <small>Open now</small>
                    : <small>Closed</small>
                  }
              </div>
              <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </a>
          </div>
        : <div>
            <a className="list-group-item list-group-item-action flex-column align-items-start" onClick={() => this.props.openWindow(this.props.index)}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{this.props.result.name}</h5>
                  { this.props.result.opening_hours.open_now
                    ? <small className="text-muted">Open now</small>
                    : <small className="text-muted">Closed</small>
                  }
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small className="text-muted">Donec id elit non mi porta.</small>
              </a>
          </div>
      }
          
      </div>
    );
  }
}

export default ListingsEntries;
