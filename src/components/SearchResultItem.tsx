import React from "react";

type SearchResultItemProps = {
  title: string;
  pic: string;
  price: number;
};

export function SearchResultItem(props: SearchResultItemProps) {
  return (
    <div className="result-item__container">
      <h3 className="result-item__title">{props.title}</h3>
      <img
        className="result-item__image"
        src={props.pic}
        alt={props.title.toLowerCase().replaceAll(" ", "-")}
      />
      <span className="result-item__price">$ {props.price}</span>
    </div>
  );
}
