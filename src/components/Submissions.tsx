import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'reactstrap';
import { TaxLastClickedState } from '../reducers/tax';
import { SubmissionState } from '../reducers/submission';
import { SubmissionActionTypes } from '../actions/submission';
import { store } from './App';

import '../styles/submissions.css';

const columnDefs = [
  { headerName: 'Name', field: 'name' },
  { headerName: 'Surname', field: 'surname' },
  { headerName: 'Age', field: 'age' },
];

type PropsList = {
  data: SubmissionState[];
};

const SubmissionsGrid: React.FC<PropsList> = ({ data }) => (
  <div className="submissions-list">
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={data}
        domLayout="autoHeight"
        columnDefs={columnDefs}
      />
    </div>
  </div>
);

const Submissions: React.FC = () => {
  const history = useHistory();
  const [rowData, setRowData] = useState<SubmissionState[] | []>([]);
  const tax: TaxLastClickedState = store.getState().lastTaxClicked;

  useEffect(() => {
    fetch(`http://localhost:3000/submissions?parentId=${tax.id}`, {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((submissions) => {
        setRowData(submissions);
        store.dispatch({
          type: SubmissionActionTypes.ADD_TAX_SUBMISSIONS,
          payload: {
            [tax.id]: submissions,
          },
        });
        return true;
      });
  }, []);
  return (
    <div className="submissions">
      <h1>Submissions of Tax ID: {tax.id} </h1>
      <SubmissionsGrid data={rowData} />
      <div className="submissions-button">
        <Button type="button" onClick={() => history.goBack()}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default Submissions;
