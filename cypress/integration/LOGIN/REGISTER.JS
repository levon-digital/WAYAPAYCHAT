describe("LOGIN", function(){
    it("invalidLOGIN", function(){

        cy.visit("https://www.konga.com/")
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click();
        cy.get('#username').type("adewale@gmail");
        cy.get('#password').type("password123");
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click();

    
    });
   
    it("valid", function(){
        //cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click();
        cy.wait(5000)
        cy.get('#username').clear().type("adewaleogunkoyodey200@gmail.com");
        cy.get('#password').clear().type("adewale2020");
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click();




    });


});