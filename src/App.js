import React from 'react';
import './App.scss';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import marked from 'marked';
import {Editor, Highlights} from './Editor.js';
import Previewer from './Previewer.js';
import initMarkdownText from './initial-markdown-text.js';

const UPDATE = 'UPDATE';
const update = (code) => ({type: UPDATE, code});
const reducer = (state = initMarkdownText, action) => {
  switch (action.type) {
    case UPDATE:
      return action.code;
    default:
      return state;
  }
};

const store = createStore(reducer);

const mapDispatchToProps = dispatch => ({
  updateCode: code => {
    dispatch(update(code));
  }
});

const mapStateToEditorProps = code => ({
  code
});

marked.setOptions({
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  headerIds: false,
});
const mapStateToPreviewerProps = code => ({
  markedCode: marked(code)
});

const ConnectedHighlights = connect(mapStateToEditorProps, null)(Highlights);
const ConnectedEditor = connect(mapStateToEditorProps, mapDispatchToProps)(Editor);
const ConnectedPreviewer = connect(mapStateToPreviewerProps, null)(Previewer);

function App() {
  return (<Provider store={store}>
    <div className="App row w-100">
      <div id="editor-container" className="col form-group">
        <ConnectedHighlights />
        <ConnectedEditor />
      </div>
      <div id="preview-container" className="col">
        <ConnectedPreviewer />
      </div>
    </div>
  </Provider>);
}

export default App;
