# Métodos HTTP

1. **GET**:
   - *Descripción*: El método GET solicita la representación de un recurso específico. Se utiliza para recuperar datos del servidor.
   - *Uso típico*: Obtener información, como páginas web, imágenes, archivos, etc.
   - *Ejemplo*: Una solicitud GET a `http://api.example.com/users` podría devolver una lista de usuarios.

2. **POST**:
   - *Descripción*: El método POST envía datos al servidor para ser procesados. Se utiliza para enviar datos que deben ser procesados por el servidor.
   - *Uso típico*: Crear un nuevo recurso, enviar datos de un formulario HTML, realizar una acción que modifica el estado del servidor.
   - *Ejemplo*: Enviar un formulario de registro a `http://api.example.com/register` para crear una nueva cuenta de usuario.

3. **PUT**:
   - *Descripción*: El método PUT reemplaza todas las representaciones actuales del recurso de destino con los datos enviados en la solicitud.
   - *Uso típico*: Actualizar completamente un recurso existente.
   - *Ejemplo*: Actualizar los detalles de un usuario existente enviando una solicitud PUT a `http://api.example.com/users/{userId}`.

4. **PATCH**:
   - *Descripción*: El método PATCH aplica modificaciones parciales a un recurso. Se utiliza para actualizar parcialmente un recurso existente.
   - *Uso típico*: Actualizar una parte específica de un recurso sin afectar al resto.
   - *Ejemplo*: Modificar el nombre de usuario de un usuario existente enviando una solicitud PATCH a `http://api.example.com/users/{userId}`.

5. **DELETE**:
   - *Descripción*: El método DELETE borra el recurso especificado.
   - *Uso típico*: Eliminar un recurso existente del servidor.
   - *Ejemplo*: Eliminar un usuario específico enviando una solicitud DELETE a `http://api.example.com/users/{userId}`.

6. **OPTIONS**:
   - *Descripción*: El método OPTIONS solicita información sobre las opciones de comunicación disponibles en el recurso de destino.
   - *Uso típico*: Obtener información sobre los métodos HTTP que admite el servidor para un recurso específico.
   - *Ejemplo*: Obtener una lista de métodos HTTP permitidos para un recurso enviando una solicitud OPTIONS a `http://api.example.com/users`.

7. **HEAD**:
   - *Descripción*: El método HEAD solicita la cabecera de respuesta idéntica a una solicitud GET, pero sin el cuerpo de la respuesta.
   - *Uso típico*: Obtener metadatos sobre un recurso sin recuperar el cuerpo de la respuesta completa.
   - *Ejemplo*: Obtener información sobre un recurso, como su tamaño o tipo de contenido, enviando una solicitud HEAD a `http://api.example.com/resource`.

## Códigos de Estado HTTP no relacionados con Errores

- **100 Continue**: El servidor ha recibido los encabezados de solicitud y el cliente debería continuar con la solicitud.
- **101 Switching Protocols**: El servidor está cambiando los protocolos según la solicitud del cliente.
- **200 OK**: La solicitud ha tenido éxito. El significado de este código de estado depende del método de solicitud.
- **201 Created**: La solicitud se ha completado con éxito y se ha creado un nuevo recurso como resultado.
- **202 Accepted**: La solicitud se ha aceptado para procesamiento, pero aún no se ha completado.
- **203 Non-Authoritative Information**: El servidor está devolviendo metainformación no vinculante que no está garantizada o no es confiable.
- **204 No Content**: La solicitud se ha completado con éxito, pero no hay contenido para devolver.
- **205 Reset Content**: El servidor está solicitando que el agente de usuario restablezca la vista del documento que estaba mostrando.
- **206 Partial Content**: El servidor está devolviendo una parte del recurso debido a una solicitud de rango.
- **300 Multiple Choices**: La solicitud tiene más de una respuesta posible. El usuario o el agente de usuario deben elegir entre ellos.
- **301 Moved Permanently**: La página solicitada se ha movido permanentemente a una nueva ubicación.
- **302 Found**: La página solicitada se ha movido temporalmente a una nueva ubicación.
- **303 See Other**: El servidor está redirigiendo al cliente a otro recurso, generalmente después de realizar una solicitud POST.
- **304 Not Modified**: Indica que la página no ha sido modificada desde la última solicitud.
- **305 Use Proxy**: El cliente debe utilizar un proxy especificado por la ubicación.
- **307 Temporary Redirect**: El servidor está redirigiendo al cliente a otro recurso, pero el cliente debe hacer una nueva solicitud usando el mismo método.
- **308 Permanent Redirect**: El servidor está redirigiendo al cliente a otro recurso de forma permanente, similar a 301, pero el cliente debe hacer una nueva solicitud usando el mismo método.

## Errores de Cliente (400-499)

- **400 Bad Request**: La solicitud del cliente no se pudo entender por el servidor debido a una sintaxis incorrecta, datos incompletos o inválidos en la solicitud.
- **401 Unauthorized**: El cliente necesita autenticación para acceder al recurso solicitado, pero no la ha proporcionado o las credenciales son incorrectas.
- **403 Forbidden**: El servidor ha entendido la solicitud, pero se niega a cumplirla. El cliente no tiene permiso para acceder al recurso solicitado.
- **404 Not Found**: El servidor no pudo encontrar el recurso solicitado. Es uno de los errores más comunes y se produce cuando la URL solicitada no existe en el servidor.

### Errores de Servidor (500-599)

- **500 Internal Server Error**: Ocurrió un error interno en el servidor mientras procesaba la solicitud del cliente. Este error generalmente se debe a un problema en el servidor.
- **502 Bad Gateway**: El servidor actuó como una puerta de enlace y recibió una respuesta no válida del servidor ascendente mientras intentaba completar la solicitud del cliente.
- **503 Service Unavailable**: El servidor no está disponible actualmente para manejar la solicitud del cliente debido a una sobrecarga temporal o mantenimiento del servidor.
- **504 Gateway Timeout**: El servidor ascendente no recibió una respuesta oportuna del servidor descendente mientras intentaba completar la solicitud del cliente.
