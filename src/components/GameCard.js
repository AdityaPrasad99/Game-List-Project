import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";

const GameCard = (props) => {
  const { data } = props;

  const { title, thumbnail, platform, game_url } = data;
  return (
    <div>
      <Card
        sx={{
          maxWidth: 365,
          backgroundColor: "inherit",
          color: "white",
          boxShadow: "none",
          border: "none",
        }}
        onClick={() => window.open(game_url)}
      >
        <CardMedia
          sx={{ height: 206 }}
          image={thumbnail}
          title="green iguana"
        />
        <CardContent className="mt-4 mb-8 !p-0">
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className="font-semibold text-slate-100 text-left !mb-4"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            className="text-slate-200 text-left !mb-2"
          >
            {platform}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
};

export default GameCard;
