// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: Mar 2023
// This file contains the JS functions for index.html

/**
 * This function gets the users Street Address.
 */
function enterClicked() {
  // input
  const streetName = document.getElementById('street-name').value;
  const streetNumber = document.getElementById('street-number').value;

  //output
  document.getElementById("address").innerHTML = "Your address is: " + streetNumber + ", " + streetName ;
}