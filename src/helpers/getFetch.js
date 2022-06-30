const getFetch = async (id) => {
  const url = `https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${id}&APIkey=9a1167d3332e82bd491409d865430b94123dc0bcde47020b469795919eced617`;

  const resp = await fetch(url);
  const {
    result: [team], //Esto quiere decir que de la respuesta hay un array que se llama result y destructuramos el primer elemento y lo nombramos team.
  } = await resp.json();

  //console.log(team.players);

  return {
    name: team.team_name,
    logo: team.team_logo,
    id: team.team_key,
    players: team.players,
  };
};

export default getFetch;
