import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Box, IconButton, Typography, Skeleton, Button, Modal } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthContext } from "../../../context/auth.context";

import styles from "./styles.module.scss";
import AddStoneComponent from "../StoneAdd";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  const handleAdd = () => {
    setIsModalOpen(true);
  };

  return (
    <Box className={styles.header}>
      <Box>
        <Box className={styles.leftSections}></Box>
      </Box>
      <Box className={styles.rightSections}>
        {isLoggedIn && <Button onClick={handleAdd}>Добавить камень</Button>}
        {isLoading ? (
          <Skeleton className={styles.skeleton} />
        ) : !isLoggedIn ? (
          <IconButton className={styles.signInBtn} onClick={handleClick}>
            <LockOutlinedIcon />
            <Typography className={styles.signIn}>Войти</Typography>
          </IconButton>
        ) : (
          <AccountCircleIcon sx={{ color: "black", width: 30, height: 30 }} />
        )}
      </Box>
      <Modal open={isModalOpen} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <AddStoneComponent />
      </Modal>
    </Box>
  );
};

export default Header;
