import React, { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "./GameCard";
import { Grid } from "@mui/material";

const GamesList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
          "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
        },
      })
      .then((resp) => {
        setList(resp.data);
      });
  }, []);

  return (
    <div>
      {list.length === 0 && <div>Loading</div>}
      <Grid container>
        {list.length > 0 &&
          list.map((gameDetails) => (
            <Grid item xs={6} sm={4} md={3} key={gameDetails.id} className="p-2">
              <GameCard data={gameDetails} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default GamesList;
