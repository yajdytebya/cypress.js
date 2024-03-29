describe('Автотесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru'); //ввела логин
        cy.get('#loginButton').should('be.disabled') //кнопка некликабельна
        
        cy.get('#pass').type('iLoveqastudio1') //ввела пароль
        cy.get('#loginButton').should('be.enabled') //кнопка кликабельна

        cy.get('#loginButton').click(); //нажимаю войти

        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик
    })

    it('Забыл пароль', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click(); //нажала забыл пароль 

        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввела логин
        cy.get('#restoreEmailButton').click(); //клик кнопка
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

    })



    it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
    
        cy.get('#mail').type('german@dolnikov.ru'); //ввела логин
        cy.get('#loginButton').should('be.disabled') //кнопка некликабельна
            
        cy.get('#pass').type('iLoveqastudio2') //ввела пароль
        cy.get('#loginButton').should('be.enabled') //кнопка кликабельна
    
        cy.get('#loginButton').click(); //нажимаю войти
    
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю текст
    
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

    })


    it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
    
        cy.get('#mail').type('german@dolnikov.ruu'); //ввела логин
        cy.get('#loginButton').should('be.disabled') //кнопка некликабельна
            
        cy.get('#pass').type('iLoveqastudio1') //ввела пароль
        cy.get('#loginButton').should('be.enabled') //кнопка кликабельна
    
        cy.get('#loginButton').click(); //нажимаю войти
    
        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяю текст
    
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

    })


    it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('germandolnikov.ru'); //ввела логин
        cy.get('#loginButton').should('be.disabled') //кнопка некликабельна
        
        cy.get('#pass').type('iLoveqastudio1') //ввела пароль
        cy.get('#loginButton').should('be.enabled') //кнопка кликабельна

        cy.get('#loginButton').click(); //нажимаю войти

        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик

    })

    it('Проверка строчных букв', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввела логин
        cy.get('#loginButton').should('be.disabled') //кнопка некликабельна
        
        cy.get('#pass').type('iLoveqastudio1') //ввела пароль
        cy.get('#loginButton').should('be.enabled') //кнопка кликабельна

        cy.get('#loginButton').click(); //нажимаю войти

        cy.get('#messageHeader').should('be.visible'); //текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //есть крестик
    })

})
