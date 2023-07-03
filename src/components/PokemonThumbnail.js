import React from "react";

const PokemonThumbnail = ({ pokemon }) => {
  const style = `thumb-container ${pokemon.data.types[0].type.name}`;

  return (
    <div className={style}>
      <div className="number">
        <small>#0{pokemon.data.id}</small>
      </div>
      <img src={pokemon.data.sprites.front_default} alt={pokemon.data.name} />
      <div className="detail-wrapper">
        <h3>{pokemon.data.name}</h3>
        <small>Type: {pokemon.data.types[0].type.name}</small>
      </div>
    </div>
  );
};

export default PokemonThumbnail;
