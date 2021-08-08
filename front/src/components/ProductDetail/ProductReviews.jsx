import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//alerts
import { toast } from "react-toastify";

//action imports
import {
  getRevs,
  checkReviewer,
  addRev,
  deleteRev,
  updateRev,
} from "../../redux/actions/reviewActions";

//styling
import {
  makeStyles,
  Typography,
  Button,
  TextField,
  Input,
  Icon,
  Card,
  CardContent,
  Box,
} from "@material-ui/core/";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Rating from "@material-ui/lab/Rating";
import "./ProductDetail.css";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  card: {
    minWidth: 275,
    maxWidth: 800,
  },
  button: {
    margin: theme.spacing(1),
    height: "6ch",
  },
  title: {
    fontSize: 14,
  },
}));

export default function ProductReviews({ productId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const uid = useSelector((store) => store.user.uid);
  const revs = useSelector((store) => store.reviews.reviews);
  const check = useSelector((store) => store.reviews.check);

  // fixed rating
  const rating =
    revs?.length && revs.reduce((acc, num) => acc + num, 0) / revs.length;

  //rating state, changing
  const [value, setValue] = useState(0);

  const initialEdit = false;
  const initialForm = {
    comment: "",
    rating: "",
    userId: uid,
    productId,
  };
  const [edit, setedit] = useState(initialEdit);
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    rating === 0 && setValue(rating);
    dispatch(
      getRevs({
        productId,
      })
    );
    if (uid) {
      dispatch(
        checkReviewer({
          productId,
          userId: uid,
        })
      );
    }
  }, [dispatch]);

  function inputHandler(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  function submit(e) {
    e.preventDefault();
    dispatch(addRev(form));
    setForm(initialForm);
  }
  function deleteHandler() {
    dispatch(deleteRev(check));
    dispatch(
      checkReviewer({
        productId,
        userId: uid,
      })
    );
    dispatch(getRevs({ productId }));

    setForm(initialForm);
  }
  function updateSubmitter(e) {
    e.preventDefault();
    dispatch(updateRev(form));
    dispatch(
      checkReviewer({
        productId,
        userId: uid,
      })
    );
    dispatch(getRevs({ productId }));
    setedit(false);
    setForm(initialForm);
  }

  return (
    <div>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Rating</Typography>
            <Rating name="read-only" value={value} readOnly />
          </Box>
        </CardContent>
      </Card>
      {typeof check == "object" && !edit ? (
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <h3>Tu comentario sobre este producto: </h3>
            <Typography className={classes.title}>{check.comment}</Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating name="read-only" value={check.rating} readOnly />
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
              onClick={() => {
                setedit(true);
              }}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={deleteHandler}
            >
              Eliminar
            </Button>
          </CardContent>
        </Card>
      ) : edit ? (
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <form
              className={classes.root}
              action="submit"
              onSubmit={updateSubmitter}
            >
              <TextField
                id="standard-basic"
                label="Tu comentario aca"
                type="text"
                name="comment"
                onChange={inputHandler}
              />
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    setForm({ ...form, rating: newValue });
                  }}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                type="submit"
              >
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : check ? (
        <Card className={classes.card} variant="outlined">
          <CardContent>
            <form className={classes.root} action="submit" onSubmit={submit}>
              <TextField
                id="standard-basic"
                label="Deja tu comentario aca"
                type="text"
                name="comment"
                onChange={inputHandler}
              />
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Francisco Garrido</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    setForm({ ...form, rating: newValue });
                  }}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                type="submit"
              >
                Enviar
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Typography></Typography>
      )}

      <div>
        {revs && revs.length ? (
          revs.map((rev) => (
            <Card className={classes.card} variant="outlined" key={rev.id}>
              <CardContent>
                <Typography className={classes.title} key={rev.comment}>
                  {rev.comment}
                </Typography>
                <Box
                  key={rev.id + rev.id}
                  component="fieldset"
                  mb={3}
                  borderColor="transparent"
                >
                  <Rating name="read-only" value={rev.rating} readOnly />
                </Box>
                <Typography component="legend">User Name</Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No hay comentarios sobre este producto</Typography>
        )}
      </div>
    </div>
  );
}
