import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import { Button } from 'reactstrap';
import { TaxState } from '../reducers/tax';
import { TaxActionTypes } from '../actions/tax';
import { store } from './App';
import '../styles/taxes.css';

type PropsAddButton = {
  data: TaxState;
};

const AddButton: React.FC<PropsAddButton> = ({ data }) => {
  const history = useHistory();
  const handleClick = () => {
    store.dispatch({
      type: TaxActionTypes.LAST_TAX_CLICKED,
      payload: data,
    });
    history.push(`/taxes/${data.id}/form`);
  };
  return (
    <div>
      <Button type="button" onClick={handleClick}>
        Add
      </Button>
    </div>
  );
};

type PropsSubDetailButton = {
  data: TaxState;
};

const SubDetailButton: React.FC<PropsSubDetailButton> = ({ data }) => {
  const history = useHistory();
  const handleClick = () => {
    store.dispatch({
      type: TaxActionTypes.LAST_TAX_CLICKED,
      payload: data,
    });
    history.push(`/taxes/${data.id}/submissions`);
  };
  return (
    <div>
      <Button type="button" onClick={handleClick}>
        Submissions
      </Button>
    </div>
  );
};

const columnDefs = [
  { headerName: 'Name', field: 'name' },
  { headerName: 'Year', field: 'year' },
  { cellRenderer: 'addButton' },
  { cellRenderer: 'detailButton' },
];

type PropsList = {
  data: TaxState[];
};

const TaxGrid: React.FC<PropsList> = ({ data }) => (
  <div className="taxes-list">
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={data}
        domLayout="autoHeight"
        columnDefs={columnDefs}
        frameworkComponents={{
          addButton: AddButton,
          detailButton: SubDetailButton,
        }}
      />
    </div>
  </div>
);

/**
 * Taxes component.
 * Displays the Taxes list available.
 */
const Taxes: React.FC = () => {
  const [rowData, setRowData] = useState<TaxState[] | []>([]);
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:3000/taxes', {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((taxes) => {
        setRowData(taxes);
        store.dispatch({
          type: TaxActionTypes.SET_TAXES,
          payload: taxes,
        });
        return true;
      });
  }, []);
  return (
    <div className="taxes">
      <h1>Taxes</h1>
      <TaxGrid data={rowData} />
      <div className="taxes-button">
        <Button type="button" onClick={() => history.push('/submissions')}>
          View All Submissions
        </Button>
      </div>
    </div>
  );
};

export default Taxes;
