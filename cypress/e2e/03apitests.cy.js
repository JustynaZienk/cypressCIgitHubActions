/// <reference types="cypress" />

//Osoby test dla nauki testów API w Cypress ze wszystkim parametrami w jednym pliku

const URLs = {
  apiURL1: "https://api.chucknorris.io/jokes/random",
  apiURL2: "https://pokeapi.co/api/v2/pokemon/",
};

const searchedElements = {
  searchedElement1: { value: "Chuck" },
  searchedElement1asString: "Chuck",
  searchedElement2: { name: "pikachu" },
};

describe("REST API tests using Cypress", () => {
  it("should check status code", () => {
    cy.request(URLs.apiURL1).as("result1");
    cy.request(URLs.apiURL2).as("result2");
    cy.request(URLs.apiURL2 + 25).as("result3"); // zapytanie request aby sprawdzic zmodyfikowany endpoint dla bazowego adresu api

    cy.get("@result1").its("status").should("equal", 200);
    cy.get("@result2").its("status").should("equal", 200);
    cy.get("@result3").its("status").should("equal", 200);
  });

  xit("should find searched element - option 1", () => { //tymczasowo wyłączamy ten krok
    cy.request(URLs.apiURL1).as("result1");
    cy.request(URLs.apiURL2).as("result2");
    cy.request(URLs.apiURL2 + 25).as("result3");

    cy.get("@result1")
      .its("body")
      .should("include", searchedElements.searchedElement1);
    cy.get("@result1").then((wynik) => {
      console.log(wynik.body); //wypisuje do konsoli logi dla sprawdzenia tylko sobie przy tworzeniu skryptu automat.
    });

    cy.get("@result1")
      .its("body.value")
      .should("include", searchedElements.searchedElement1asString);
    // cy.get("@result2")
    //   .its("body")
    //   .should("include", searchedElements.searchedElement2);
  });

  it("should find searched element - option 2", () => {
    cy.request(URLs.apiURL1).as("result1");

    cy.get("@result1").then((wynik) => {
      console.log(wynik.body); //wypisuje do konsoli logi dla sprawdzenia tylko sobie przy tworzeniu skryptu automat.
    });

    cy.get('@result1').then((response)=>{
        expect(response.body).property('value').to.contain(searchedElements.searchedElement1asString)
    })

  });
});

