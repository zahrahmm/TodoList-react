import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Sidebar from "./Sidebar";
import { useState } from "react";

type AppBarProps = {
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
};

export default function DenseAppBar({
  onSelectCategory,
  selectedCategory,
}: AppBarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box className="mt-3 w-5/6 sm:hidden">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#efefef",
          borderRadius: "8px",
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            position: "relative",
            justifyContent: "center",
          }}
        >
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{
              color: "black",
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
            }}
            onClick={toggleSidebar}
          >
            ☰
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            Category
          </Typography>
        </Toolbar>
      </AppBar>
      {sidebarOpen && (
        <Sidebar
          isMobile={true}
          onSelectCategory={onSelectCategory}
          selectedCategory={selectedCategory}
        />
      )}
    </Box>
  );
}
