import { Box } from "@mui/material";
import StonesList from "../../components/features/StonesList";
import { categories } from "../../constants/sidebar";
import SidebarComponent from "../../components/features/SidebarComponent";
import Layout from "../../components/features/Layout";

import styles from "./styles.module.scss";

const CategoryComponent = () => {
  return (
    <Layout>
    <SidebarComponent categories={categories} />
    <Box className={styles.content}>
      <Box className={styles.lists}>
        <StonesList />
      </Box>
    </Box>
  </Layout>
  );
};

export default CategoryComponent;
