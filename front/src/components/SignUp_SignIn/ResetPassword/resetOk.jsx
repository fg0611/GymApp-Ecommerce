import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  data: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  },
  button: {
    display: "flex",
    alignItems: "center",
    
  }
}));

export default useStyles;
