describe("LOGIN", function(){
     it("invalid username", function(){

        cy.visit("https://staging.wayabank.ng/");
        cy.get('.showing > .nav-link').click();
        cy.get(':nth-child(1) > input').type("veragreeeen20@gmail.com")
        cy.get('.toggle-pass-wrapper > input').type("Password@234")
        cy.get('.btn').click();
        cy.get('.swal-button').click();


     });

      it("invalid password", function(){
        cy.wait(5000)
        cy.get(':nth-child(1) > input').clear().type("veragreen20@gmail.com");
        cy.get('.toggle-pass-wrapper > input').clear().type("Password234");
        cy.get('.btn').click();
        cy.wait(5000)
        cy.get('.swal-button').click();


      });

       it("click on login button without inputting valid login credential", function(){
        cy.wait(5000)
        cy.get(':nth-child(1) > input').clear();
        cy.get('.toggle-pass-wrapper > input').clear();
        cy.get('.btn').click();
        cy.get('.swal-button').click();

       });
   
       it("login with special character", function(){
        cy.wait(5000)
        cy.get(':nth-child(1) > input').clear().type('1234589985');
        cy.get('.toggle-pass-wrapper > input').clear().type('&&46357366');
        cy.get('.btn').click();
       // cy.get('.swal-button').click();

       });

       it("Login with valid credential", function(){
        cy.wait(5000)
        cy.get('.swal-button').click();
        cy.get(':nth-child(1) > input').clear().type('veragreen20@gmail.com');
        cy.get('.toggle-pass-wrapper > input').clear().type('Password@234');
        cy.get('.btn').click();



       });
   

})