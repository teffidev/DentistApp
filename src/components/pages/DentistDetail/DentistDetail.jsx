import React from "react";
import styles from "./DentistDetail.module.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PublicIcon from "@mui/icons-material/Public";

export const DentistDetail = ({ user }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image="https://res.cloudinary.com/dhwjwa7tn/image/upload/v1680982701/5499030_wcusww.png"
              alt="Dentist photo"
            />
            <CardContent>
              <Grid item xs={12} md={6}>
                <Typography sx={{mt:4, mb: 2}} variant="h6" component= "div">
                  {user.name}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon/>
                    </ListItemIcon>
                    <ListItemText primary={user.email}/>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocalPhoneIcon/>
                    </ListItemIcon>
                    <ListItemText primary={user.phone}/>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PublicIcon/>
                    </ListItemIcon>
                    <ListItemText primary={user.website}/>
                  </ListItem>
                </List>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};
