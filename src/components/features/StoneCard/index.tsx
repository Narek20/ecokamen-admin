import { ChangeEvent, FC, useState } from 'react';
import {Link} from 'react-router-dom'
import { useTheme } from '@material-ui/core';
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { IStone } from '../../../types/stone.types';

import styles from './styles.module.scss';

const StoneCard: FC<IStone> = ({
  title,
  imageHrefs,
  link,
  price,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className={styles.card}>
      <Link className={styles.titleAndImgContainer} to={link}>
        <img
          width={isMobile ? 200 : 100}
          height={isMobile ? 200 : 100}
          src={imageHrefs[0]}
          alt="category"
        />
        <Typography className={styles.title}>{title}</Typography>
      </Link>
      <Typography className={styles.price}>{price} руб./тн</Typography>
    </Box>
  );
};

export default StoneCard;
