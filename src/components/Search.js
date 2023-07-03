import React from "react";

const Search = ({ search, setInput }) => {
  // 抓到輸入值
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="input"
        onChange={inputHandler}
        type="text"
        placeholder="輸入要尋找的寶可夢"
      />
      <button onClick={search}>搜尋</button>
    </div>
  );
};

export default Search;
