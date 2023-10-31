import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EnhancedTable from './EnhancedTable';

const defaultValues = {
  order: 'asc',
  orderBy: 'id',
  dense: false,
  rowsPerPage: 5,
};

const alignValues = {
  head: ['left', 'left', 'left'],
  body: ['left', 'left', 'left'],
};

const styles = {
  bgColors: {
    head: 'blue',
    body: 'white',
    toolbar: 'green',
    pagination: 'yellow',
  },
  fontColors: {
    head: 'white',
    body: 'black',
    toolbar: 'black',
    pagination: 'black',
  },
};

const headCells = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'score', label: 'Score' },
];

const rows = [
  { id: 1, name: 'John', score: 85 },
  { id: 2, name: 'Jane', score: 92 },
];

const tableTitle = 'Sample Table';

test('it renders table with expected title and columns', () => {
  render(
    <EnhancedTable
      defaultValues={defaultValues}
      alignValues={alignValues}
      tableTitle={tableTitle}
      headCells={headCells}
      rows={rows}
      styles={styles}
    />
  );

  const title = screen.getByText(tableTitle);
  expect(title).toBeInTheDocument();

  headCells.forEach((cell) => {
    const header = screen.getByText(cell.label);
    expect(header).toBeInTheDocument();
  });
});

test('it renders the correct number of rows based on rowsPerPage', () => {
  const rowsPerPage = rows.length;
  render(
    <EnhancedTable
      defaultValues={{ ...defaultValues, rowsPerPage }}
      alignValues={alignValues}
      tableTitle={tableTitle}
      headCells={headCells}
      rows={rows}
      styles={styles}
    />
  );

  const tableRows = screen.getAllByRole('row');
  // Include the header row
  const expectedRowCount = rowsPerPage + 1;
  expect(tableRows).toHaveLength(expectedRowCount);
});


