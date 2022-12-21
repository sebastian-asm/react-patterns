# React avanzado con Typescript y Patrones de Diseño

- Configuración de rutas con React Router V6.
- Creación de componentes con Lazyload (carga peresoza).
  - Al momento de utilizar lazy de React es necesario hacer **export default** del componente a utilizar.
  - Nested: rutas anidadas.
- Patrones de diseño (una forma de hacer algo).
  - **Compound Component**: componentes dentro de otros (HOC), lo que se busca es tener un componente padre e internamente ir definiendo sus componentes hijos comunmente con una relación directa.
  - **Extensible Styles**: pasar estilos/clases a nuestros componentes y que sean capaces de interpretarlos.
  - **Control Props**: permitir que los componentes puedan cambiar y aceptar un valor, también, mediantes las props se tiene el control de la información del estado del componente.
  - **State Initializer**: solicita enviar un valor inicital (o parámetros) en nuestro componente, dando la posibilidad de poder resetear ese valor.

Notas: Los useEffect por recomendación de React deben cumplir solo una tarea especifica.
