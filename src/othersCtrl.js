/**
 * Created by skoutarapu on 7/16/2017.
 */

angular.module('myApp')
    .controller("others", function others(getGeoCodeService, getPlacesNearBy, _) {
        var vm = this;

        init();

        function init() {
            vm.sai = "coming from others";
            vm.slider = {
                minLimit: 25,
                options: {
                    step: 5,
                    onChange: sliderChange,
                    translate: function setValue(value) {
                        return value + " miles";
                    }
                }
            };
        }

        function sliderChange(sliderId, modelValue, highValue, pointerType) {
            setRadiusToSearch(modelValue);
            getRestaurantByDistance();
        }

        function getRadiusToSearch() {
            return !isNaN(vm.radiusToSearch) ? (1609 * vm.radiusToSearch) : (1609 * 25);
        }

        function setRadiusToSearch(value) {
            vm.radiusToSearch = value;
        }

        function getRestaurantByDistance() {
            getGeoCodeService.get({address: "woburn", key: "AIzaSyDTg0F3V18OaZ-0r6vdPTEje5rSdKeuX_4"}, function success(response) {
                var location = _.get(response, "results[0].geometry.location");
                if (location.lat && location.lng) {
                    var latAndLng = location.lat + "," + location.lng;
                    var requestPlaces = {
                        location: latAndLng,
                        radius: getRadiusToSearch(),
                        type: "restaurant",
                        keyword: "food",
                        key: "AIzaSyDTg0F3V18OaZ-0r6vdPTEje5rSdKeuX_4"
                    };
                    getPlacesNearBy.get(requestPlaces, function success(response) {
                        vm.restaurants = _.get(response, "results[0].name");
                    });
                }
            });
        }
    });