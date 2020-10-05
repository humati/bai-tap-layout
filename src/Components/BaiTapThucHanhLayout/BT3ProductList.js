import React, { Component } from "react";
import BT3ProductItem from "./BT3ProductItem";

export default class BT3ProductList extends Component {
  render() {
    return (
      <div className="mt-3">
        <div className="row text-center ">
          <BT3ProductItem />
          <BT3ProductItem />
          <BT3ProductItem />
        </div>
        <div className="row text-center ">
          <BT3ProductItem />
          <BT3ProductItem />
          <BT3ProductItem />
        </div>
      </div>
    );
  }
}
