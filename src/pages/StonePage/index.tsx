import { Box } from '@mui/material';

import styles from './styles.module.scss';
import SidebarComponent from '../../components/features/SidebarComponent';
import { categories } from '../../constants/sidebar';

const StonePage = () => {
  return (
    <Box className={styles.stonePage}>
      <SidebarComponent categories={categories} />
      {/* <StoneInformation /> */}
    </Box>
  );
};

export default StonePage;
