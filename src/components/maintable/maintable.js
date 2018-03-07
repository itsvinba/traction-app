// React dependencies
import React, { Component } from 'react';

// Vendor dependencies
  import styled from 'styled-components';
  import ReactTable from 'react-table';
  import "react-table/react-table.css";

// Custom Dependencies
  import theme from '../../util/theme';
  import data from './components/data'
  import columns from './components/tablecolumn'

class MainTable extends Component {
  constructor() {
    super();
    this.state = {
      data: data,      
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
    const { data } = this.state;
    return (
      <Container>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Channel",
              accessor: "channel",
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              Cell: this.renderEditable
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips>Tip: Hold shift when sorting to multi-sort!</Tips>
      </Container>
    );
  }

}

export default MainTable;

const Container = styled.div`
  padding: 20px;
`;

const Tips = styled.div`
  text-align: center;
  font-style: italic;
`;