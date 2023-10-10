import React from "react";

export function SearchForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.onSearch) {
      props.onSearch(e.target.search.value);
    }
  };

  return (
    <div className="search-form__container">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input className="search-form__input" type="text" name="search" />
        <button className="search-form__button">Buscar</button>
      </form>
    </div>
  );
}
