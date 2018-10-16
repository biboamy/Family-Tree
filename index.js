var app = angular.module('myApp', []);
      app.controller('PeopleController', function($scope, $http) {
        $http.get("family_tree.json")
        .success(function(respond) {
            $scope.people = respond.people;

            /*$scope.position = function(oj){
              var newq = $scope.makeNewPosition();
              
              
              var oldq = angular.element(this).prop('offsetLeft');
              var speed = $scope.calcSpeed([oldq.top, oldq.left], newq);
              $(id).animate({ top: newq[0], left: newq[1] }, speed, function(){
                $scope.position(id);        
              });
              console.log(angular.element(this));
            }

            $scope.makeNewPosition = function(){
              var h = $(window).height() - 50;
              var w = $(window).width() - 50;             
              var nh = Math.floor(Math.random() * h);
              var nw = Math.floor(Math.random() * w);            
              return [nh,nw]; 
            }

            $scope.calcSpeed = function(prev, next){
              var x = Math.abs(prev[1] - next[1]);
              var y = Math.abs(prev[0] - next[0]);              
              var greatest = x > y ? x : y;              
              var speedModifier = 0.1;
              var speed = Math.ceil(greatest/speedModifier);
              return speed;
            }   

            $scope.offset = function(elm){
              try {return elm.offset();} catch(e) {}
              var rawDom = elm[0];
              var _x = 0;
              var _y = 0;
              var body = document.documentElement || document.body;
              var scrollX = window.pageXOffset || body.scrollLeft;
              var scrollY = window.pageYOffset || body.scrollTop;
              _x = rawDom.getBoundingClientRect().left + scrollX;
              _y = rawDom.getBoundingClientRect().top + scrollY;
              return { left: _x, top: _y };
            }  */                      
            
            
        }).error(function() {
            console.log("Fail to load cetering.json");
        });
      });