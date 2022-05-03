# Condiciones por resolver

Al crear el componente de BotonFav me encontraba con el siguiente
problema, al utilizar el método map() para recorrer el array de la API
no encontraba la forma de incorporarlo dentro del componente MovieCard,
ya que aparecía todos los botones que correspondían a cada película dentro del item,
lo cuál no es ni práctico ni visual para el usuario.
El botón funciona puesto que te lleva a la ruta indicada (aparece en la url el título de la película)

# Soluciones

Hacer una peticion a la API mediante POST para incorporar los items seleccionados,
utilizando el spread (operador de propagación) para que se vayan agragando los
diferentes items como favoritos, para desasociarlos utilizaría el método DELETE.
