describe("Assert elements exist", () => {
    it("Visits the app and asserts title", ()=> {
        cy.visit("http://localhost:5174")
        cy.get("h2").should("contain", "This is the title")
    });
    it("Visits the app and asserts all 9 children", ()=> {
        cy.visit("http://localhost:5174")
        cy.get('div').children().should('have.length', 10)
    });
    it("Visits the app and asserts title contains word title", ()=> {
        cy.visit("http://localhost:5174")
        cy.get('h2').contains('title')
    });
    it("Visits the app and asserts there is a capital sentence", ()=> {
        cy.visit("http://localhost:5174")
        cy.get('h3').contains('capital sentence', {matchCase: false})
    });
    it("Visits the app and asserts h2 has a parent with classname 'main-container'", () => {
        cy.visit("http://localhost:5174")
        cy.get('h2').parent().should('have.class', 'main-container')
    })
});