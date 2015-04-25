angular.module ('starter.controllers', [])

  .controller ('HomeCtrl', function ($scope, $state, Offers, SmartLink, $ionicPopup) {
  $scope.offers = Offers.all ();
  $scope.remove = function (chat) {
    Offers.remove (chat);
  };
  $scope.buy = function () {
    var id = this.offer.id;
    $state.go ('tab.checkout', {id: id});
  };

  var showBirthday = function () {
    var confirmPopup = $ionicPopup.confirm ({
      title: 'Friends birthdays...!',
      templateUrl: 'templates/birthdays.html',
      scope: $scope
    });
    confirmPopup.then (function (res) {
      if (res) {
        $state.go ('tab.shop',{lname:$scope.birthdays[0].lname, fname: $scope.birthdays[0].fname});
      } else {
        console.log ('You are not sure');
      }
    });
  };

  SmartLink.getFacebook_birthdays ().then (function (birthdays) {
    $scope.birthdays = birthdays;
    showBirthday ();
  });

})

  .controller ('ShopCtrl', function ($scope, $state, $stateParams, Products) {
  $scope.products = Products.all ();
  $scope.remove = function (chat) {
    Products.remove (chat);
  };
  $scope.fname= $stateParams.fname;
    $scope.lname= $stateParams.lname;
  $scope.buy = function () {
    var id = this.product.id;
    $state.go ('tab.checkout', {id: id, fname: $stateParams.fname, lname:$stateParams.lname});//////////------
  };
})
  .controller ('BillingCtrl', function ($scope, $stateParams, Products,SmartLink, $ionicPopup) {
  $scope.products = Products.all ();
  var confirmAddressFromGmail = function (fname) {
    var confirmPopup = $ionicPopup.alert ({
      title: 'Auto fill the form...!',
      template: 'wanna get address for ' + fname
    });
    confirmPopup.then (function (res) {
      if (res) {
        SmartLink.getGmail_Address(fname).then(function(data){
          $scope.fname = $stateParams.fname || '';
          $scope.lname = $stateParams.lname || '';
          $scope.address = data[0].address || '';
        })
      } else {
        console.log ('You are not sure');
      }
    });
  };
  confirmAddressFromGmail($stateParams.fname);

})

  .controller ('CheckoutCtrl', function ($scope, $state, $stateParams, product) {
  $scope.product = product;

  $scope.goToBilling = function () {
    $state.go ('tab.billing', {
      id: $stateParams,
      fname: $stateParams.fname,
      lname: $stateParams.lname
    });
  }
})

;
