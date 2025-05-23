describe('First test', () => {
    it('Vérifier le contenu de la page', () => {
    cy.visit('/') // 1.



    cy.get("h1") // 8.
        .should("contain", "Hello Studi");
    });
});



