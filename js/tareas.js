function ControladorTareas($scope){
        //pasamos al scope un atributo que es un array de 2 objetos. 
        $scope.tareas = [{texto: 'Hacer la compra', realizada: true}, 
                         {texto: 'Lavar la ropa', realizada: false}
                        ];
        //agregamos al scope del controlador una funcion de agregar tareas
        $scope.agregarTarea = function() {
            //al array tarelas le agrega otro objeto. Que recogemos por el scope.
            $scope.tareas.push({texto: $scope.textoNuevaTarea, realizada:false});
            //y limpiamos el texto del input una vez agregada la tarea.
            $scope.textoNuevaTarea = '';
        }

}