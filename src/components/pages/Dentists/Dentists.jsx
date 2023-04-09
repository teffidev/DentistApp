import React from "react";
import styles from "./Dentists.module.css";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

export const Dentists = ({ users, dispatch, favs }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dentists</h1>
      {users.map((dentist) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={dentist.id}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "blue" }} arial-label="recipe">
                  R
                </Avatar>
              }
              title={dentist.name}
            />
            <CardMedia
              component="img"
              height="280"
              image="https://res.cloudinary.com/dhwjwa7tn/image/upload/v1680982701/5499030_wcusww.png"
              alt="Dentist photo"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Here a great specialist in alternative medicine and recognized
                for his great gifts to heal oral health, in addition to his
                excellent care and kind treatment to his patients.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="Add to favorites"
                onClick={() => dispatch({ type: "FAV_MODE", payload: dentist })}
              >
                <FavoriteIcon
                  color={
                    favs.some((fav) => fav.id === dentist.id)
                      ? "error"
                      : "disabled"
                  }
                />
              </IconButton>
              <Link to={`/dentistDetail/${dentist.id}`}>
                <button variant="contained">Detail</button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};
