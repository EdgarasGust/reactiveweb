import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Spinner() {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <Box sx={{ display: "flex" }}>
          <CircularProgress size="4rem" />
        </Box>
      </div>
    </>
  );
}

export default Spinner;
