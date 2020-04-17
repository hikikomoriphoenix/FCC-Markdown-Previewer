import React from 'react';

class Previewer extends React.Component {
  render() {
    return (<div id="preview" className="w-100" dangerouslySetInnerHTML={{
        __html: this.props.markedCode
      }}/>);
  }
}

export default Previewer;
