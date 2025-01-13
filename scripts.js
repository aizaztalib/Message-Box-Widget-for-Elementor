/* --------------------------------------------------
    * message box
    * --------------------------------------------------*/
var messageBox = function($scope, $){
    $scope.find('.xp-message-box').each( function(){
        var selector = $(this),
            close = selector.find('>i');
        close.on('click', function() {
            $scope.fadeOut();
        });
    });
};