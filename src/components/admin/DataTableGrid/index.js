import React from "react";
import DataTable from "react-data-table-component";

const DataTableGrid = ({
  columns,
  height,
  data,
  title,
  fixedHeader,
  fixedHeaderScrollHeight,
  pagination,
  highlightOnHover,
  subHeader,
  subHeaderComponent,
}) => {
  return (
    <DataTable
      title={title}
      fixedHeader={fixedHeader}
      fixedHeaderScrollHeight={fixedHeaderScrollHeight}
      columns={columns}
      data={data}
      pagination={pagination}
      highlightOnHover={highlightOnHover}
      subHeader={subHeader}
      subHeaderComponent={subHeaderComponent}
      height={height}
    />
  );
};

export default DataTableGrid;
