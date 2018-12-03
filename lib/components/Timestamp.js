import React from 'react';
// provide-store refactor
import storeProvider from 'components/storeProvider';

// component receives timestamp value from store
class Timestamp extends React.Component {
  render() {
    return (
      <div>
        {/* Method 1 - no storeProvider, pass timestamp directly */}
        {this.props.timestamp.toString()}
      </div>
    );
  }
}

function extraProps( store ) {
  return {
    timestamp: store.getStore().timestamp
  };
}

export default storeProvider( extraProps )( Timestamp );