            var vehicles = [
                {
                    name: 'GSA Schedule 70',
                    shortname: 'gs70',
                    description: 'This is a recommended FSSI vehicle'
                },
                {
                    name: 'Army CHESS',
                    shortname: 'chss',
                    description: 'This vehicle is required for DOD acquisition and unavailable to others'
                },
                {
                    name: 'NASA SEWP',
                    shortname: 'sewp',
                    description: 'This open to all government agencies but does not guarantee TAA compliance'
                }
            ];
            var catalog = [
                {
                    publisher: 'Adobe',
                    "pub-short": 'adbe',
                    apps: [
                        {
                            name: 'Adobe Creative Cloud',
                            "app-short": 'adcc',
                            vehicleShortnames: [ 'chss', 'sewp' ]
                        },
                        {
                            name: 'Adobe Connect',
                            "app-short": 'admp',
                            vehicleShortnames: [ 'sewp', 'gs70' ]
                        },
                        {
                            name: 'Adobe Acrobat Pro',
                            "app-short": 'caro',
                            vehicleShortnames: [ 'gs70' ]
                        }
                    ]
                },
                {
                    publisher: 'Intuit',
                    "pub-short": 'intu',
                    apps: [
                        {
                            name: 'QuickBooks Online',
                            "app-short": 'qboe',
                            vehicleShortnames: [ 'gs70' ]
                        },
                        {
                            name: 'TurboTax',
                            "app-short": 'ttax',
                            vehicleShortnames: [ 'sewp', 'gs70' ]
                        },
                        {
                            name: 'Intuit Payroll Service',
                            "app-short": 'pyrl',
                            vehicleShortnames: [ 'sewp', 'gs70' ]
                        }
                    ]
                },
                {
                    publisher: 'Microsoft',
                    "pub-short": 'msft',
                    apps: [
                        {
                            name: 'Microsoft Windows',
                            "app-short": 'wind',
                            vehicleShortnames: [ 'gs70', 'sewp', 'chss' ]
                        },
                        {
                            name: 'Microsoft Office',
                            "app-short": 'offc',
                            vehicleShortnames: [ 'gs70' ]
                        },
                        {
                            name: 'Microsoft Sharepoint',
                            "app-short": 'shar',
                            vehicleShortnames: [ 'gs70', 'sewp', 'chss' ]
                        }
                    ]
                }
            ];

            var publisher = {};
            $('select#publisher-name').on('change', function(ev) {
                publisher = {};
                catalog.some(function(val, indx, array) {
                    if (val["pub-short"] === ev.target.value) {
                        publisher = val;
                        return true;
                    }
                });
                $('#app-prompt').css('visibility',
                    'visible').html(
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
