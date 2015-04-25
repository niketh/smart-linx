angular.module('starter.services', [])

.factory('Products', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products = [{
    id: 0,
    name: 'AKKRITI BY PANTALOONS',
    lastText: 'Belle Fille White Printed Sheath Dress',
    picUrl: 'http://assets.myntassets.com/h_240,q_95,w_180/v1/image/style/properties/744341/Belle-Fille-White-Printed-Sheath-Dress_1_56f887d3cdb47b7f8af4f24b65ac1e86_mini.jpg'
  }, {
    id: 1,
    name: 'CHM',
    lastText: 'CHM Pink & White Floral Printed Shift Dress',
    picUrl: 'http://assets.myntassets.com/h_240,q_95,w_180/v1/image/style/properties/704132/Iti-Women-Dresses_1_df5850965e0900ef4495a385505a1af9_mini.jpg'
  }, {
    id: 2,
    name: 'La Zoire',
    lastText: 'La Zoire Orange Printed Fit & Flare Dress',
    picUrl: 'http://assets.myntassets.com/h_240,q_95,w_180/v1/images/style/properties/La-Zoire-Orange-Printed-Fit---Flare-Dress_f3e5ac3dd760b1ee16b0605461f9352e_images_mini.jpg'
  }, {
    id: 3,
    name: 'AND by Anita Dongre',
    lastText: 'AND by Anita Dongre White & Navy Printed Blouson Dress',
    picUrl: 'http://assets.myntassets.com/h_240,q_95,w_180/v1/image/style/properties/721395/CHM-Women-Dresses_1_f4419f61762478728d7561c7962bdfe9_mini.jpg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'DressBerry Multicoloured Floral Printed Flare Berry Dress',
    picUrl: 'http://assets.myntassets.com/h_240,q_95,w_180/v1/image/style/properties/695826/AND-by-Anita-Dongre-Women-Dresses_1_b1139f5d64199573d01d9691d3d06e33_mini.jpg'
  }];

  return {
    all: function() {
      return products;
    },
    remove: function(chat) {
      products.splice(products.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(chatId)) {
          return products[i];
        }
      }
      return null;
    }
  };
}).factory('Offers', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products = [{
    id: 0,
    name: 'DISCOVER TODAY',
    lastText: 'MONOCHROME',
    picUrl: 'http://myntra.myntassets.com/assets/banners/2015/4/20/1429509722626-discover-today.jpg'
  }, {
    id: 1,
    name: 'ONLY ON NYMTRA',
    lastText: 'NUMERO',
    picUrl: 'http://myntra.myntassets.com/assets/banners/2015/4/20/1429509733279-only-on-myntra.jpg'
  }, {
    id: 2,
    name: 'JUST IN',
    lastText: 'MEROONER',
    picUrl: 'http://myntra.myntassets.com/assets/banners/2015/4/20/1429510390047-just-in.jpg'
  }];

  return {
    all: function() {
      return products;
    },
    remove: function(chat) {
      products.splice(products.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(chatId)) {
          return products[i];
        }
      }
      return null;
    }
  };
}).factory('SmartLink', function($q, $timeout) {
    var factory = {};
    factory.getFacebook_birthdays = function(){
      var q = $q.defer();
      var data = [{
        fname:'Shobhana',
        lname:'verma',
        DOB : 'tomorow',
        likes : 'shirts and jens',
        address : '1st main 4th cross '
      },{
        fname:'Purchita',
        lname:'manahotra',
        DOB : 'day after tomorrow',
        likes : 'Kurta',
        address : 'shantinagar balendur'
      }];
      $timeout(function() {
        q.resolve(data);
      }, 3000);

      return q.promise;
    };

    factory.getGmail_Address = function(name){
      var q = $q.defer();
      var data = [{
        name:'Shobhana verma',
        address : '1st main 4th cross '
      },{
        name:'Purchita manahotra',
        address : 'shantinagar balendur'
      }];
      $timeout(function() {
        q.resolve(data);
      }, 3000);

      return q.promise;
    };

    return factory;

});
