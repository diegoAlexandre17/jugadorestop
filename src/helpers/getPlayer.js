const getPlayer = async (id) => {
  const url = `https://apiv2.allsportsapi.com/football/?&met=Players&playerId=${id}&APIkey=9a1167d3332e82bd491409d865430b94123dc0bcde47020b469795919eced617`;

  const resp = await fetch(url);
  let {
    result: [national, player], //Esto quiere decir que de la respuesta hay un array que se llama result y destructuramos el primer elemento y lo nombramos team.

    //El api a veces trae como respuesta un array con dos objetos, el primer objeto es la informacion del jugador como jugador de su pais, y la segunda posicion es la informacion como jugador de club, como tambien otras veces solo trae un objeto en el array con la informacion de su club. Es por eso que validamos que si player esta vacio(Es decir, que el array solo tiene un objeto) rellenamos player con la informacion de la primera posicion( en este caso la informacion de su club)
  } = await resp.json();

  if (!player) {
    player = national;
  }

  return {
    name: player.player_name,
    team_name: player.team_name,
    number: player.player_number,
    type: player.player_type,
    goals: player.player_goals,
    assists: player.player_assists,
    match_played: player.player_match_played,
    minutes: player.player_minutes,
    yellow_cards: player.player_yellow_cards,
    red_cards: player.player_red_cards,

    age: player.player_age,
    img: player.player_image,
  };
};

export default getPlayer;
