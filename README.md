# Prueba Ténica Front-End

Crear mini app para la compra de dispositivos moviles

## Instalacion de Dependencias y librerias de desarrollo para la ejecuion de la prueba

Se hace instalaciòn de de las dependecias como Redusx, axios, react dom y las libreias de diseño que para este caso sera bootstrap para react

npm install react-bootstrap bootstrap

## Organizar proyecto Arquitectura

Para tener un proyecto escalable con el tiempo lo primero es crear dos carpetas:
-componentes: aqui estaran los componentes generales los cuales se dividen en otras carpetas compuestas con archivos index.js seran modulos de exportacion para reducir las lineas al momento de exportar los componentes

-pages: en esta estaran componentes que solo se usaran en la pagina local

## Definicion de las rutas

se hace una definicion de las rutas que se desean donde el dominio del API sera el mismo para todas:
--Obtenr el listado de los productos
--Obtener el detalle del producto
--añadir pruductos al carrito de compra

## Accediendo a la informacion de la API

para acceder a la informacion de la api utilizamos los slices creados en la carpeta store y tramemos la informacion con el uso de card los cuales se llamara por el react-router-dom

## Revisar api

hacemos una revision del funcionamiento del api http://front-test-api.herokuapp.com/ por medio de Software de Postman y vefiricamos codigos de funcionamiento (200)

## filtrado de productos

para el filtrado de productos se crean thunk donde se ejecuta por categoria separado por model y brank
