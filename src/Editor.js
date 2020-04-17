import React from 'react';

export class Editor extends React.Component {

  handleOnChange = (event) => {
    this.props.updateCode(event.target.value);
  }

  render() {
    return (<textarea id="editor" className="form-control" onChange={this.handleOnChange} spellCheck="false">
      {this.props.code}
    </textarea>);
  }

  componentDidMount() {
    const editor = document.getElementById("editor");
    editor.style.height = 'auto';
    editor.style.height = `${editor.scrollHeight}px`;
  }
}

export class Highlights extends React.Component {
  render() {
    return (<div id="backdrop" className="form-control">
      <div id="highlights">
        <mark>{this.props.code}</mark>
      </div>
    </div>)
  }
}

export default Editor;
