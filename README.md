# Banco

Aplicación de prueba para implementar Redux.

## Modo de uso

Seguir las instrucciones dadas más abajo. Sugiero revisar el codigo del repositorio para aclarar dudas.

## Pasos para crear el Banco desde cero

1. Instalar Create-react-app. Ir al terminal y usar
```
npx create-react-app bank
```

2. Entrar al directorio
```
cd bank
```

3. Instalar Redux
```
npm install --save redux react-redux
```

4. Iniciar Vscode. Desde el terminar en la ubicación del proyecto.

```
code .
```

5. Eliminar todo el contenido de src a excepción de app.js, index.js y registerServiceWorker.js. Recomiendo hacerlo desde vscode

```
src
  app.js
  index.js
  registerServiceWorker.js
```

6. Crear las carpetas redux y components dentro de src
```
  src
    components
    redux
    app.js
    index.js
    registerServiceWorker.js
```

7. Creamos los tipos de acciones que haremos. Esto se hace creando el archivo "types.js" dentro de redux con el siguiente contenido.

```jacascript
export const ADD_MONEY = 'add_money';
export const REMOVE_MONEY = 'remove_money';
```

8. Creamos dentro de redux las carpetas actions y reducers

9. Hacemos las acciones que permiten agregar y quitar 10 dolares. Creamos el archivo index.js en ./src/redux/actions (Mirar codigo)

10. Creamos el reducer que se encargará de gestionar el dinero. agregamos el archivo moneyReducer.js en ./src/redux/reducers (Mirar codigo)

11. Ahora hacemos index.js en la carpeta de reducers para combinar los reducers. En este ejemplo hay uno solo pero es importante que se entienda el ejemplo para escalar la aplicación.

12. Nos vamos al archivo index.js dentro de src e instalamos el componente que comunica redux. No olvidar eliminar la linea que llama al css. (Ver el codigo)

13. En App.js creamos el componente. Usamos "connect" para conectar con redux. Revisar codigo para entender lo que hicimos.

## Desafíos

- Crear un botón que agregue 5 dolares. El codigo está casi implementado (leer la acción). Por ende, la solución es hacer algo en app.js

- Crear una sección para depositar yenes. (Por ende, habrían 6 botones en pantalla considerando el desafío anterior)