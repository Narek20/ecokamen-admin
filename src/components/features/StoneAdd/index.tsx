import { useState, ChangeEvent } from "react";
import { Box, Select, Typography, IconButton, TextField, MenuItem, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useToast } from "../../../context/toast.context";
import { addStone } from "../../../services/stone.service";
import { sidbarSeachKeys } from "../../../constants/sidebar";
import { IStone } from "../../../types/stone.types";

import styles from "./styles.module.scss";

const AddStoneComponent = ({}) => {
  const [images, setImages] = useState<{ value: string; key: number }[]>([]);
  const [stoneInfo, setStoneInfo] = useState<IStone | { searchCategory: string }>({ searchCategory: "" });

  const { showToast } = useToast();

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const Event = event.target as HTMLInputElement;

    if (Event.files && Event.files[0]) {
      const reader = new FileReader();

      reader.onload = () => setImages([...images, { value: reader.result as string, key: images.length }]);

      reader.readAsDataURL(Event.files[0]);
    }
  };

  const handleRemove = (imageKey: number) => {
    setImages(images.filter(({ key }) => key !== imageKey));
  };

  const handleInfoChange = (key: string, value: string) => {
    setStoneInfo({ ...stoneInfo, [key]: value });
  };

  const handleAdd = async () => {
    const data = await addStone({ ...stoneInfo, imageHrefs: images.map((image) => image.value) } as IStone);

    if (data.success) {
      showToast("success", data.message);
    } else {
      showToast("error", data.message);
    }
  };

  return (
    <Box className={styles.modalComponent}>
      <TextField type="file" onChange={onChange} />
      {images.map((image, index) => (
        <Box key={index + Math.random()} className={styles.images}>
          <img src={image.value as string} className={styles.img} />
          <IconButton onClick={() => handleRemove(image.key)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      <TextField
        className={styles.input}
        label="Имя"
        onChange={(event) => handleInfoChange("title", event?.target.value)}
      />
      <TextField
        className={styles.input}
        label="категория"
        onChange={(event) => handleInfoChange("category", event?.target.value)}
      />
      <TextField
        className={styles.input}
        label="Описание"
        onChange={(event) => handleInfoChange("description", event?.target.value)}
      />
      <TextField
        className={styles.input}
        label="Цена"
        onChange={(event) => handleInfoChange("price", event?.target.value)}
      />
      <TextField
        className={styles.input}
        label="Применения"
        onChange={(event) => handleInfoChange("usage", event?.target.value)}
      />
      <TextField
        className={styles.input}
        label="Толщина"
        onChange={(event) => handleInfoChange("thickness", event?.target.value)}
      />
      <Typography className={styles.hint}>Напишите толщину в этом формате '10-20,20-30,30-40'</Typography>
      <TextField
        className={styles.input}
        label="Имя для поиска"
        onChange={(event) => handleInfoChange("searchName", event?.target.value)}
      />
      <Typography className={styles.hint}>
        Напишите имя посика в этом формате 'plitnyak_rastovskiy_serebristiy'
      </Typography>
      <Select
        className={styles.input}
        value={stoneInfo["searchCategory"]}
        onChange={(event) => handleInfoChange("searchCategory", event?.target.value)}
      >
        {sidbarSeachKeys.map((key) => (
          <MenuItem value={key}>{key}</MenuItem>
        ))}
      </Select>
      <Button onClick={handleAdd}>Добавить</Button>
    </Box>
  );
};

export default AddStoneComponent;
