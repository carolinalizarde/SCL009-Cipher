# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://justcodeit.io/wp-content/uploads/2018/08/Cifrado_Cesar_Python.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.


#### Definición del producto

Este **cipher** ha sido pensado para adolescentes que utilizan redes sociales y constantemente realizan mensajes publicos, con este cipher pueden hacerlo de forma mas divertida entregando los mismos mensajes de manera secreta, todos sabran que le enviaste un mensaje de cumpleaños.


**Cipher Cumpleaños** resuelve un problema tipico en la etapa adolescente, de aquellos que desean pertenecer a un grupo y hacer un tradicional saludo de cumpleaños, pero a la vez se averguenzan de expresar sus emociones de manera segura en redes sociales. Que mejor forma de hacerlo, que cuidar tus mensajes cifrandolos.

#### Interfaz de usuario (UI)

La interfaz permite al usuario de manera rapida y simple.
**Cifrar**
- Ingresando un texto inicial que debe ser cifrado.
- Ingresando un *numero* (_offset_) para indicar la cantidad de veces que desea realizar el desplazamiento. 
- Finalmente la aplicacion entregara el mensaje secreto.
**Descifrar**
-Ingresando el mensaje secreto en la segunda caja de texto.
- Ingresando el **numero** (_offset_) secreto ingresado por el primer usuario.
-Finalmente la aplicacion entregara el mensaje original.


## Desarrollo del Proyecto Trello

Para partir la realizacion del proyecto se desarrollo una planificacion con la herramienta trello, dividido en HTML,INDEX.JS,CIPHER:JS finalizando con CSS.

