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
        };
        //agregamos al scope del controlador un método que podremos llamar desde el HTML 
        //cuando querramos.
        $scope.tareasRestantes = function() {
            var cuenta = 0;
            //por cada tarea del array tareas del scope ....
            angular.forEach($scope.tareas,function(tarea) {
                //..... añadimos un 0 o un 1 dependiendo de si está realizada.
                cuenta += tarea.realizada ? 0 : 1;
            });
            return cuenta;
        };

        //agregamos otro método que permite eliminar tareas.
        $scope.eliminar = function() {
            //primero guardamos las tareas que existen en una variable...
            var tareasViejas = $scope.tareas;
            //después vaciamos el array de tareas existente.
            $scope.tareas = [];
            //y recorremos el array de tareas viejas incluyendo las realizadas 
            angular.forEach(tareasViejas, function(tarea){
                //tarea es el indice del array de cada iteracción
                if (!tarea.realizada) $scope.tareas.push(tarea);
            });
        }

}