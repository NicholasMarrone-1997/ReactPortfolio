import React, { Component } from 'react';
import Nav from '../Header/Nav';
import { Document, Page } from 'react-pdf';

export default class Resume extends Component {
    state = { numPages: null, pageNumber: 1};

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

render() {
    const { pageNumber } = this.state;

    return(
    <div>
        <Nav />
        <div style={{ width: 600 }}>
          <Document
            file={`/resume.pdf`}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>
    </div>
    );
  }
}