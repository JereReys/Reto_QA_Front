Feature: Compra completa en Sauce Demo

  @compra
  Scenario: Usuario realiza compra exitosa
    Given que inicio sesión como "standard_user"
    And estoy en la página de productos
    When agrego el producto "Sauce Labs Backpack" al carrito
    And voy al carrito
    And procedo al checkout con nombre "Nicolas", apellido "Mamani", código "07001"
    And confirmo la orden
    Then debería ver el mensaje "Thank you for your order!"