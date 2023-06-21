import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../Header';

import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <Box className={styles.layout}>
      <Header />
      <Box className={styles.content}>
      {children}
      </Box>
    </Box>
  );
};

export default Layout;
