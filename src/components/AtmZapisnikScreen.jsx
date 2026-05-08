import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import GroupFrame from "./GroupFrame.jsx";
import LayoutFrame from "./LayoutFrame.jsx";

/**
 * --------------------------------------------------------
 * COMMON FRAME COMPONENT
 * --------------------------------------------------------
 */

const Frame = ({ title, children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        border: "2px outset #bdbdbd",
        backgroundColor: "#f5f5f5",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <Box
        sx={{
          position: "absolute",
          top: -11,
          left: 30,
          px: 1,
          backgroundColor: "#f5f5f5",
          zIndex: 2,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Content */}
      <Box
        sx={{
          height: "100%",
          width: "100%",
          p: 2,
          pt: 3,
          boxSizing: "border-box",
        }}
      >
        {children}
      </Box>
    </Paper>
  );
};

/**
 * --------------------------------------------------------
 * MAIN GRID - ATM ZAPISNIK
 * --------------------------------------------------------
 */

const AtmZapisnik = ({ rows, selectedRowId, onSelectionChange }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "bankomat", headerName: "Bankomat", flex: 1 },
    { field: "lokacija", headerName: "Lokacija", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <LayoutFrame title="ATM Zapisnik">
      {/* <Box sx={{ height: 600, width: '100%' }}> */}
        <DataGrid 
        rows={rows}
        columns={columns}
        density="compact"
        disableRowSelectionOnClick
        />
      {/* <DataGrid
        rows={rows}
        columns={columns}
        density="compact"
        disableRowSelectionOnClick
        // rowSelectionModel={selectedRowId ? [selectedRowId] : []}
rowSelectionModel={selectedRowId != null ? [selectedRowId] : []}        
        onRowSelectionModelChange={(selection) => {
          onSelectionChange(selection[0]);
        }}
      /> */}
        {/* </Box> */}
    </LayoutFrame>
  );
};

/**
 * --------------------------------------------------------
 * DETAIL COMPONENT
 * --------------------------------------------------------
 */

const AtmZapisnikDetalj = ({ title, selectedMasterRow, type }) => {
  const rows = useMemo(() => {
    if (!selectedMasterRow) return [];

    return [
      {
        id: 1,
        naziv: `${type} - Stavka 1`,
        vrijednost: `Vrijednost 1 (${selectedMasterRow.status})`,
      },
      {
        id: 2,
        naziv: `${type} - Stavka 2`,
        vrijednost: `Vrijednost 2 (${selectedMasterRow.status})`,
      },
    ];
  }, [selectedMasterRow, type]);

  const columns = [
    { field: "naziv", headerName: "Naziv", flex: 1 },
    { field: "vrijednost", headerName: "Vrijednost", flex: 1 },
  ];

  return (
    <LayoutFrame title={title}>
      <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        density="compact"
        hideFooter
      />
      </Box>
    </LayoutFrame>
  );
};

/**
 * --------------------------------------------------------
 * ACTIONS COMPONENT
 * --------------------------------------------------------
 */

const AtmZapisnikAkcije = ({ selectedMasterRow }) => {
  const status = selectedMasterRow?.status;

  return (
    // <Frame title="Akcije">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <Button
          variant="contained"
          disabled={status !== "OPEN"}
        >
          Potvrdi
        </Button>

        <Button
          variant="contained"
          disabled={status !== "CLOSED"}
        >
          Ponovo Otvori
        </Button>

        <Button
          variant="contained"
          color="error"
          disabled={!selectedMasterRow}
        >
          Obriši
        </Button>

        <Button
          variant="outlined"
          disabled={!selectedMasterRow}
        >
          Pregled
        </Button>
      </Box>
    // </Frame>
  );
};

/**
 * --------------------------------------------------------
 * SEARCH COMPONENT
 * --------------------------------------------------------
 */

const AtmZapisnikPretraga = () => {
  return (
    // <Frame title="Pretraga">
    <LayoutFrame title="Pretraga">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body2">
          Ovdje ide forma za pretragu...
        </Typography>
      </Box>
    {/* </Frame> */}
    </LayoutFrame>
  );
};

/**
 * --------------------------------------------------------
 * ROOT SCREEN
 * --------------------------------------------------------
 */

export default function AtmZapisnikScreen() {
  const rows = [
    {
      id: 1,
      bankomat: "ATM-001",
      lokacija: "Banja Luka",
      status: "OPEN",
    },
    {
      id: 2,
      bankomat: "ATM-002",
      lokacija: "Prijedor",
      status: "CLOSED",
    },
    {
      id: 3,
      bankomat: "ATM-003",
      lokacija: "Doboj",
      status: "OPEN",
    },
  ];

  const [selectedRowId, setSelectedRowId] = useState(1);

  const selectedMasterRow = rows.find(
    (r) => r.id === selectedRowId
  );

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        p: 1,
        boxSizing: "border-box",
        backgroundColor: "#dcdcdc",
      }}
    >
      {/* MAIN LAYOUT */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          gap: 1,
        }}
      >
        {/* TOP SECTION - 70% */}
        <Box
          sx={{
            height: "65%",
            minHeight: 0,
          }}
        >
          <AtmZapisnik
            rows={rows}
            selectedRowId={selectedRowId}
            onSelectionChange={setSelectedRowId}
          />
        </Box>

        {/* BOTTOM SECTION - 30% */}
        <Box
          sx={{
            height: "35%",
            display: "flex",
            gap: 1,
            minHeight: 0,
          }}
        >
          {/* 30% */}
          <Box sx={{ width: "30%", minWidth: 0 }}>
            <AtmZapisnikDetalj
              title="Detalj 1"
              selectedMasterRow={selectedMasterRow}
              type="D1"
            />
          </Box>

          {/* 30% */}
          <Box sx={{ width: "30%", minWidth: 0 }}>
            <AtmZapisnikDetalj
              title="Detalj 2"
              selectedMasterRow={selectedMasterRow}
              type="D2"
            />
          </Box>

          {/* 20% */}
          <Box sx={{ width: "20%", minWidth: 0 }}>
            <LayoutFrame title="Akcije">
                <AtmZapisnikAkcije
                selectedMasterRow={selectedMasterRow}
                />
            </LayoutFrame>
          </Box>

          {/* 20% */}
          <Box sx={{ width: "20%", minWidth: 0 }}>
            <AtmZapisnikPretraga />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}