var app = angular.module('app', []);


app.controller('MainController', ['$scope', function(scope){
  
  scope.agent = {
    
    team : 'Grønt Taastrup',
    username : 'Admin',
    missionName : 'Lille Diamant',
    tasks : [
        {
          portal : 'Svømmepigen',
          area : 'Taastrup',
          location : 'https://www.ingress.com/intel?ll=55.642449,12.318268&z=16',
          status : 1,
          command : 'Jarvis'
        },
        {
          portal : 'Svømmepigen',
          area : 'Taastrup',
          location : 'https://www.ingress.com/intel?ll=100.642449,102.318268&z=16',
          status : 3,
          command : 'Jarvis'
        }
      ]
  };
  
  scope.settings = {
    volume : false,
    notifications : false
  }
  
  scope.calculateMissionProgress = function(){
    var progress = 0;
    var totalProgress = 0;
    
    angular.forEach(scope.agent.tasks, function(value, key){
      totalProgress += 3;
      progress += value.status;
    });
    
    progress = progress / totalProgress * 100;
    console.log(progress);
    return progress;
  }
  
  scope.getPortalLocation = function(portal){
    var reg = /ll=(\d+.\d+),(\d+.\d+)/;
    
    p = (typeof portal === 'object') ? portal.portal : portal;
    
    location = reg.exec(p);
    
    return {long : location[0], lang : location[1]};
  }
  
  
}])