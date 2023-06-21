import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import StoneCard from "../StoneCard";
import { IStone } from "../../../types/stone.types";
import { getStonesByCategory } from "../../../services/stone.service";

import styles from "./styles.module.scss";

const StonesList = () => {
  const [stones, setStones] = useState<IStone[] | []>([]);
  const { category } = useParams();

  const getStones = async () => {
    const data = await getStonesByCategory(category || 'plitnyak' as string);
    if (data.success) {
      setStones(data.data);
    }
  };

  useEffect(() => {
    getStones();
  }, [category]);

  return (
    <Box className={styles.stones}>
      {stones.map((category) => (
        <StoneCard key={category.title} {...category} />
      ))}
    </Box>
  );
};

export default StonesList;
