import React from "react";

const PokemonSingleThumbnail = ({ searchPokemon }) => {
  const style = `thumb-container ${searchPokemon.types[0].type.name}`;

  return (
    <div className={style}>
      <div className="number">
        <small>#0{searchPokemon.id}</small>
      </div>
      <img src={searchPokemon.sprites.front_default} alt={searchPokemon.name} />
      <div className="detail-wrapper">
        <h3>{searchPokemon.name}</h3>
        <small>Type: {searchPokemon.types[0].type.name}</small>
      </div>
    </div>
  );
};

export default PokemonSingleThumbnail;
