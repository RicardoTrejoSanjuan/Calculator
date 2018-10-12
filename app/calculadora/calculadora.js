function calCtrl(operaciones){
    this.$onInit = function(){

        this.answer = null;
        this.value1 = 0;
        this.value2 = 0;
        this.operador = '';

        this.setOperador = function (operador){
            this.operador = angular.copy(operador)
            debugger;
            if (!this.answer.isNaN()){
                this.value1 = angular.copy(this.answer)
            } else {
                alert("Se requiere un numero valido!!");
            }

        };

        // operaciones.suma();
    }

    
}

angular.module("app").component("calculadora", {
    bindings:{},
    templateUrl: "app/calculadora/calculadora.html",
    controller: calCtrl
});