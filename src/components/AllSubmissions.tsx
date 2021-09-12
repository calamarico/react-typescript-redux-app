import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'reactstrap';
import { SubmissionState } from '../reducers/submission';

import '../styles/allSubmissions.css';

const columnDefs = [
  {
    headerName: 'TaxID',
    field: 'parentId',
    filter: 'agTextColumnFilter',
    sortable: true,
  },
  {
    headerName: 'Name',
    field: 'name',
    filter: 'agTextColumnFilter',
    sortable: true,
  },
  {
    headerName: 'Surname',
    field: 'surname',
    filter: 'agTextColumnFilter',
    sortable: true,
  },
  {
    headerName: 'Age',
    field: 'age',
    filter: 'agNumberColumnFilter',
    sortable: true,
  },
];

type PropsList = {
  data: SubmissionState[];
};

const AllSubmissionsGrid: React.FC<PropsList> = ({ data }) => (
  <div className="all-submissions-list">
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={data}
        domLayout="autoHeight"
        columnDefs={columnDefs}
      />
    </div>
  </div>
);

/**
 * AllSubmissions component.
 * Displays a table with all the taxes submissions.
 * Table allows sort and filter.
 */
const AllSubmissions: React.FC = () => {
  const history = useHistory();
  const [rowData, setRowData] = useState<SubmissionState[] | []>([]);

  useEffect(() => {
    fetch('http://localhost:3000/submissions?_sort=parentId', {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((allSubmissions) => setRowData(allSubmissions));
  }, []);
  return (
    <div className="all-submissions">
      <h1> List of All Submissions </h1>
      <AllSubmissionsGrid data={rowData} />
      <div className="all-submissions-button">
        <Button type="button" onClick={() => history.goBack()}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default AllSubmissions;
