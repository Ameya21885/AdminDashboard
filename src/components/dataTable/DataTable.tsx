import { Link } from "react-router-dom";
import "./dataTable.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  
  const handleDelete=(id: number)=>{
    // delete the item
    console.log(id+ " has been deleted!")
  }

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.id}`}>
            <img src="/images/view.svg" alt="view" />
          </Link>
          <div className="delete" onClick={()=> handleDelete(params.row.id)}>
            <img src="/images/delete.svg" alt="delete" />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
