            var publisher = {};
            $('select#publisher-name').on('change', function(ev) {
                $('#total-progress').css('width', '25%').attr('aria-valuenow', '25');
                publisher = {};
                catalog.some(function(val, indx, array) {
                    if (val["pub-short"] === ev.target.value) {
                        publisher = val;
                        return true;
                    }
                });
                $('#app-prompt').html(
                    'You picked ' + publisher.publisher +
                    '. Now pick a product');
                $('#app-choices').css('visibility',
                    'visible');
                $('img#publisher-logo').attr('src',
                    publisher["pub-short"] + '-logo.png');
                var optionHtml = '<option selected disabled hidden value="">' +
                                   'Choose&hellip;';
                publisher.apps.forEach( function(val, indx, array) {
                    optionHtml += 
                        '<option name="app" value="' + val["app-short"] +'">' +
                                val.name +
                                '</option>';
                });
                $('select#app-name').html(optionHtml);
            });

            $('select#app-name').on('change', function(ev) {
                $('#total-progress').css('width', '50%').attr('aria-valuenow', '50');
                var application = {};
                publisher.apps.some(function(val, indx, array) {
                    if (val["app-short"] === ev.target.value) {
                        application = val;
                        return true;
                    }
                });
                $('#veh-prompt').css('visibility',
                    'visible').html(
                    'You picked ' + application.name +
                    '. Now pick a purchase vehicle');
                $('#veh-choices').css('visibility',
                    'visible');
                var optionHtml = '<option selected disabled hidden value="">' +
                                   'Choose&hellip;';
                application.vehicleShortnames.forEach(
                            function(shortname, indx, array) {
                    var vehicle = {};
                    vehicles.some(function(thisVehicle, indx, array) {
                        if (thisVehicle.shortname === shortname) {
                            vehicle = thisVehicle;
                        optionHtml += 
                            '<option name="veh" value="' + vehicle.shortname +
                                '">' + vehicle.name + '</option>';
                        return true;
                        }
                    });
                });
                $('select#veh-name').html(optionHtml);
                $('#' + this.value + '-prompt').css('visibility',
                    'visible');
                $('#' + this.value + '-choices').css('visibility',
                    'visible');
                $('img#app-logo').attr('src',
                    this.value + '-logo.png');
            });
