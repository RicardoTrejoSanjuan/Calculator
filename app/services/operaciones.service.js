angular.module("app").service("operaciones",function($log){
    var self = this;
    
    self.suma = function(){
      $log.error("Si no comentas, es un error");
    }
  });