import { MoreVert } from "@mui/icons-material";
import { Box, IconButton, styled, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { moreInfotype, RowProps } from "../../../utils/interfaces";
import { useState } from "react";
import { data } from "../../../utils/constants/constants";
import { ModalBox } from "../../molecules/ModalBox";
import { TypographyComponent } from "../../atoms/Typography";

const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40%",
  position: "absolute",
  top: "20%",
  left: "30%",
});

const CustomModalContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(2),
}));
export const CandidateDataTable = ({ rows, moreinfo }: RowProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] =
    useState<moreInfotype | null>(null);

  const handleMoreDetailsClick = (id: number) => {
    const candidate = moreinfo.find((row) => row.id === id);
    if (candidate) {
      setSelectedCandidate(candidate);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 140,
    },
    {
      field: "name",
      headerName: "Candidate Name",
      width: 140,
    },
    {
      field: "email",
      headerName: "Email Address",
      width: 140,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      width: 140,
    },
    {
      field: "moredetails",
      headerName: "More details",
      width: 140,
      renderCell: (params) => (
        <IconButton onClick={() => handleMoreDetailsClick(params.row.id)}>
          <MoreVert />
        </IconButton>
      ),
    },
  ];

  return (
    <>
      <Box textAlign={"center"} marginTop="5%">
        <Typography variant="h3" children={data.condidatedata} />
      </Box>
      <Wrapper>
        <DataGrid columns={columns} rows={rows} />
        {isModalOpen && selectedCandidate && (
          <ModalBox open={isModalOpen} onClose={closeModal}>
            <CustomModalContent>
              <TypographyComponent variant="h6">
                Candidate Details
              </TypographyComponent>
              <TypographyComponent>
                Name: {selectedCandidate.name}
              </TypographyComponent>
              <TypographyComponent>
                Email: {selectedCandidate.email}
              </TypographyComponent>
              <TypographyComponent>
                Occupation: {selectedCandidate.occupation}
              </TypographyComponent>
              <TypographyComponent>
                TechStack: {selectedCandidate.techstack}
              </TypographyComponent>
            </CustomModalContent>
          </ModalBox>
        )}
      </Wrapper>
    </>
  );
};
