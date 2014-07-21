var optionHtml;

function setProgress(pct) {
   $('#total-progress').attr('aria-valuenow', pct).css('width', pct + '%');;
   $('#total-progress-sr-only').text(pct + '% Complete');
}

optionHtml = '<option selected disabled hidden value="">' +
                   'Choose&hellip;';
catalog.forEach( function(pub, pubIndex, pubArray) {
    optionHtml += 
        '<option name="publisher" value="' + pub.shortname +'">' +
            pub.name +
        '</option>';
});
$('select#publisher-name').html(optionHtml);

optionHtml = '<option selected disabled hidden value="">' +
                   'Choose&hellip;';
categories.forEach( function(cat, catIndex, catArray) {
    optionHtml += 
        '<option name="category" value="' + cat.shortname +'">' +
            cat.name +
        '</option>';
});
$('select#category-name').html(optionHtml);

var publisher = {};
$('select#publisher-name').on('change', function(ev) {
    setProgress('25');
    publisher = {};
    catalog.some(function(val, indx, array) {
        if (val.shortname === ev.target.value) {
            publisher = val;
            return true;
        }
    });
    $('#app-prompt').html(
        'You picked ' + publisher.name +
        '. Now pick a product');
    $('#app-choices').css('visibility',
        'visible');
    $('img#publisher-logo').attr('src',
        'assets/' + publisher.shortname + '.png');
    var optionHtml = '<option selected disabled hidden value="">' +
                       'Choose&hellip;';
    publisher.apps.forEach( function(val, indx, array) {
        optionHtml += 
            '<option name="app" value="' + val.shortname +'">' +
                    val.name +
                    '</option>';
    });
    $('select#app-name').html(optionHtml);
});

var category = {};
$('select#category-name').on('change', function(ev) {
    setProgress('25');
    category = {};
    categories.some(function(val, indx, array) {
        if (val["shortname"] === ev.target.value) {
            category = val;
            return true;
        }
    });
    $('#app-prompt').html(
        'You picked ' + category.name +
        '. Now pick a product');
    $('#app-choices').css('visibility',
        'visible');
    $('img#category-logo').attr('src',
        'assets/' + category.shortname + '.png');
    var optionHtml = '<option selected disabled hidden value="">' +
                       'Choose&hellip;';
    catalog.forEach( function(pub, pubIndex, pubArray) {
        pub.apps.forEach( function(app, appIndex, appArray) {
            app.categories.some( function(cat, catIndex, catArray) {
                if (cat === category.shortname) {
                    optionHtml += 
                        '<option name="app" value="' + app.shortname +'">' +
                            app.name + ' from ' + pub.name +
                            '</option>';
                }
            });
        });
    });
    $('select#app-name').html(optionHtml);
});

$('select#app-name').on('change', function(ev) {
    setProgress('50');
    var application = {};
    catalog.some( function(pub, pubIndex, pubArray) {
        pub.apps.some(function(app, appIndex, appArray) {
            if (app.shortname === ev.target.value) {
                application = app;
                return true;
            }
        });
        if (application.shortName) {
           return true;
        }
    });
    $('#veh-prompt').css('visibility',
        'visible').html(
        'You picked ' + application.name +
        '. Now pick a purchase vehicle');
    $('#veh-choices').css('visibility',
        'visible');
    var listHtml = '';
    application.vehicleDetails.forEach( function(details, detIndex, detArray) {
        listHtml += '<div class="row">' +
            '<div class="col-md-4"><a id="li-' + details.shortname +
            '" href="#" class="list-group-item">' +
            details.shortname + '</a></div>' +
            '<div class="col-md-4">unit price: ' + details.unitPrice + '</div>' +
            '<div class="col-md-4">' +
            '<button id="pick-' + details.shortname +'" data-unit-price="' +
            details.unitPrice + '" type="button" class="btn btn-primary">' +
            'Select</button></div></div>';
            return true;
    });
    $('#acq-options').html(listHtml);
    $('#' + this.value + '-prompt').css('visibility',
        'visible');
    $('#' + this.value + '-choices').css('visibility',
        'visible');
    $('[id^=pick-]').on('click', function( ev ) {
        setProgress('75');
        $('#acq-params').css('visibility', 'visible');
        $('#acq-prompt').html('Please select a quantity');
        $('#unit-price').val(ev.target.dataset.unitPrice);
        $('#total-cost').val($('#quantity').val() *
            $('#unit-price').val());
    });
});

$('#quantity').on('change', function(ev) {
    $('#total-cost').val($('#quantity').val() *
        $('#unit-price').val());
});
