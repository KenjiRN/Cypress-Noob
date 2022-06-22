describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')

     })

    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();    // CLICA NO BOTAO REGISTRe agora
        cy.contains('button', 'Register').click();      //clica no botao registrar para provocar aparecer a mensagem abaixo
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');   //  mostrar a mensagem de alerta
        cy.contains('button', 'Register').click();      //clica no botao registrar para provocar as ações abaixo, pela segunda vez
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');  //  mostrar a mensagem de alerta
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');  //  mostrar a mensagem de alerta
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');   //  mostrar a mensagem de alerta
    })
    it('verifica mensagem de email invalido', () => {
        cy.contains('a', 'Register now').click();   //atraves do contains se acha as TAGS a com o nome designado a seguir e ativa o click
        cy.contains('button', 'Register').click();  //atraves do contains se acha o button com nome Register e é ativado com o click
        cy.get('input[formcontrolname="email"]').type('jacqueline');  //INPUT COM TYPING 
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');   
    })
    it('verifica mensagem de SENHA COM MENOS DE 8 CARACTERES', () => {
        cy.contains('a', 'Register now').click();   
        cy.contains('button', 'Register').click();  
        cy.get('input[formcontrolname="password"]').type('123'); 
        cy.contains('button', 'Register').click();    
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');   
    })
})