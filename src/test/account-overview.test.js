import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Contact from '../components/contact/contact'
import SaleCard from '../components/sale/sale-card'
import InformationCard from '../components/sale/information-card'

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render contact data", () => {

  var contactData = {
    name: "Support",
    email: "support@feefo.com",
    phone: "020 3362 4208"
  }

  act(() => {
    render(<Contact data={contactData} />, container);
  });
  expect(container.querySelector("#badgeInitial").textContent.trim()).toBe(((contactData.name).charAt(0)).toUpperCase());
  expect(container.querySelector("#badgeName").textContent.trim()).toBe(contactData.name);
  expect(container.querySelector("#badgeEmail").textContent.trim()).toBe(contactData.email);
  expect(container.querySelector("#badgePhone").textContent.trim()).toBe(contactData.phone);
});

it("render information data", () => {

  var infoData = {
    information: "3%",
    infoDescription: "Info Desc"
  }

  act(() => {
    render(<InformationCard data={infoData} />, container);
  });
  expect(container.querySelector("#information").textContent.trim()).toBe(infoData.information);
  expect(container.querySelector("#infoDescription").textContent.trim()).toBe(infoData.infoDescription);
});

it("render sale data", () => {

  var saleData = {
    upload: 3,
    lines: 6
  }

  act(() => {
    render(<SaleCard data={saleData} />, container);
  });
  expect(container.querySelector("#saleDescription")
    .textContent.trim())
      .toBe("You have "+ saleData.upload + " uploads and "+saleData.lines+" lines added");
});