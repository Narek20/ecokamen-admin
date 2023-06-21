import { FC } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import styles from "./styles.module.scss";

interface IProps {
  categories: { title: string; imageHref: string; link: string }[];
}

const SidebarComponent: FC<IProps> = ({ categories }) => {
  return (
    <Box className={styles.categories}>
      {categories.map(({ link, title }) => (
        <Link key={title} className={styles.category} to={link}>
          {title}
        </Link>
      ))}
    </Box>
  );
};

export default SidebarComponent;
