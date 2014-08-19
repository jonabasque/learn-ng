function ControladorTareas($scope){
        //pasamos al scope un atributo que es un array de 2 objetos. 
        $scope.tareas = [{texto: 'Hacer la compra', realizada: true}, 
                         {texto: 'Lavar la ropa', realizada: false}
                        ];

}