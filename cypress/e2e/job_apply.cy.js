describe("Testsuite with remove attr",()=>{

  it("remove attr",()=>{
    
    cy.visit("https://www.google.ru")
    cy.get( "input[name=q]").type("Byndyusoft{ENTER}");
    cy.get("a[href='https://byndyusoft.com/']").first().invoke('removeAttr', 'target').click()
    cy.origin("https://byndyusoft.com/", ()=> {
      cy.get("section div[class='know-more__container'] span:nth-child(2)").click()
      cy.get(".popup-callback__footer-contacts [href='mailto:sales@byndyusoft.com']").should("have.text","sales@byndyusoft.com")
  })
    })
    
})