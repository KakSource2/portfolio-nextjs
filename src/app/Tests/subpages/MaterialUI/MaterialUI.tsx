import icon_pause from "./assets/pause.png";
import icon_play from "./assets/play-button-arrowhead.png";
import icon_stop from "./assets/stop-button.png";
import { Button, IconButton } from "@mui/material";
import style from "./materialui.module.scss";
const MaterialUI = () => {
  return (
    <div className={style.materialui}>
      <Button href={"/tests/"}>Back to Tests</Button>
      <div className={style.buttons}>
        <Button size="small">Normal button</Button>
        <Button size="medium" disabled>
          Disabled
        </Button>
        <Button size="large">Yeah boy</Button>
        <Button size="small" variant="text">
          Variant text
        </Button>
        <Button size="medium" variant="contained">
          Variant contained
        </Button>
        <Button size="large" variant="outlined">
          Variant outlined
        </Button>
        <Button size="small" color="success" variant="text">
          SUCCESS
        </Button>
        <Button size="medium" color="secondary" variant="contained">
          SECONDARY
        </Button>
        <Button size="large" color="error" variant="outlined">
          ERROR
        </Button>
        <Button size="small" color="success" variant="contained">
          SUCCESS
        </Button>
        <Button size="medium" color="success" variant="text">
          SECONDARY
        </Button>
        <Button size="large" color="success" variant="outlined">
          ERROR
        </Button>
        <IconButton aria-label="deleted" color="primary">
          <img width={"24px"} src={icon_play} />
        </IconButton>
        <IconButton aria-label="deleted" color="secondary">
          <img width={"24px"} src={icon_pause} />
        </IconButton>
        <IconButton aria-label="deleted" color="error">
          <img width={"24px"} src={icon_stop} />
        </IconButton>
      </div>
    </div>
  );
};
export default MaterialUI;
