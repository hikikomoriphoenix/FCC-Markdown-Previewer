import React from 'react';

class Editor extends React.Component {

  handleOnChange = (event) => {
    this.props.updateCode(event.target.value);
  }

  render() {
    return (<textarea id="editor" className="form-control h-100" onChange={this.handleOnChange}>
    {this.props.code}
  </textarea>);
  }
}

export default Editor;
