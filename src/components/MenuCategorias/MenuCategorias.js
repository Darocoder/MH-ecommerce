import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const MenuMusicGenre = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "black",
      fontSize: 16,
      textTransform: "lowercase",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "white",
      fontSize: 16,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>C</span>ategorías
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/categoria/tornillos" style={styles.link}>
            Tornillos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/correderas" style={styles.link}>
            Correderas
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/sistemas-corredizos" style={styles.link}>
            Sistemas Corredizos
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/bisagras" style={styles.link}>
            Bisagras
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/categoria/amortiguadores" style={styles.link}>
            Amortiguadores
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuMusicGenre;