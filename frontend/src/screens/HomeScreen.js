import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import mobiles from '../mobiles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);

  return (
    <div>
      <Header />
      <div className="mobileCard">
        {mobiles.map((mobile, index) => (
          <div className="card-image" key={index}>
            <img src={mobile.imageURL} alt={mobile.name} />
            <div className="card-name">{mobile.name}</div>
            <div className="card-price">Rs. {mobile.price}.00</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
