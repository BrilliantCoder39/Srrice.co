import React from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const SrricTable = ({ data, columns }) => {
  const table = useMaterialReactTable({
    columns,
    data,
  });

  const customStyles = {
    header: {
      background: 'blue', // Set the background color of the table header
    },
  };

  return <MaterialReactTable table={table} style={{ headerStyle: { backgroundColor: 'lightblue', color: 'white' } }} />;
};

export default SrricTable;