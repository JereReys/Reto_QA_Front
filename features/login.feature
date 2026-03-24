Feature: Login de usuarios en Sauce Demo

  @loginValido
  Scenario: Login exitoso con usuario estándar
    Given que estoy en la página de login
    When ingreso el usuario "standard_user" y contraseña "secret_sauce"
    Then debería ver la página de productos

  @loginInvalido
  Scenario: Login fallido con usuario bloqueado
    Given que estoy en la página de login
    When ingreso el usuario "locked_out_user" y contraseña "secret_sauce"
    Then debería ver un mensaje de error