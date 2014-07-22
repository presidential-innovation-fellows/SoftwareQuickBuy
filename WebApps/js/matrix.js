/* This is for reference 
      {
      id: "nitaacCioSp3",
      type: "gwac",
      name: "NITAAC CIO-SP3: Chief Information Officer – Solutions and Partners 3 (NIH)",
      site: "http://nitaac.nih.gov/nitaac/contracts/cio-sp3",
      availability: {
         federal: [ "all" ],
         state: [ "none" ], 
         local: [ "none" ],
         nonGovernment: [ "none" ]
      },
      fee: {
         slidingPercentage: {
            min: "0.0075",
            max: "0.01"
         },
         maximum: "150000",
         comment: "Sliding scale based on dollar volume."
      },
      expiration: "20221231",
      access: {
         contacts: [
            {
               name: "Dr. John Q. Sparrow",
               phone: "123-555-1234",
               email: "jsparrow@nih.gov"
            }
         ],
         orderingUrl: "https://nitaac.nih.gov/nitaac/e-ordering-systems"
      },
      offerings: [
         "IT Services for Biomedical Research, Health Sciences, and Healthcare",
         "Chief Information Officer (CIO) Support",
         "Imaging",
         "Outsourcing",
         "Integration Services",
         "Critical Infrastructure Protection and Information Assurance",
         "Digital Government",
         "Enterprise Management Systems",
         "Software Development"
      ]
   }
 */

$('#btn-view-matrix').on('click', function( ev ) {
    var tableHtml = '<tr>' +
        '<td>Solution</td>' +
        '<td>Type</td>' +
        '<td>Availability</td>' +
        '<td>Fees</td>' +
        '<td>Services Provided</td>' +
        '<td>Access Info</td>' +
        '</tr>';

    itHwSolutions.forEach( function( item, itemIndex, itemArray) {
        if ( solutionsToView.indexOf(item.id) != -1) {
            tableHtml += '<tr>' +
                '<td>' +
                item.name +
                '</td>' +
                '<td>' +
                item.type +
                '</td>' +
                '<td>' +
                item.availability.federal[0] +
                '</td>' +
                '<td>' +
                'ker-ching' +
                '</td>' +
                '<td>' +
                item.name +
                '</td>' +
                '<td>' +
                '<a href="' + item.access.orderingUrl + '"></a>' +
                item.access.orderingUrl +
                '</td>' +
                '</tr>';
        }
    });
    $('#matrixTable').html(tableHtml);
});

var solutionsToView = [];
var availableChoices = '';
itHwSolutions.forEach( function( item, itemIndex, itemArray) {
    solutionsToView.push(item.id);
    availableChoices +=
        '<div " class="checkbox"><label>' +
        '<input checked id="view-selector-' + item.id +
        '" class="matrix-option-checkbox" ' +
        'data-solution-id="' + item.id + '" ' +
        'type="checkbox">' +
        item.name + '</label></div>';
});

availableChoices += '<label class="radio-inline">' +
  '<input checked type="radio" name="displayOptions" id="displayHorizontal" value="horizontal">horizontal' +
  '</label>' +
  '<label class="radio-inline">' +
  '<input disabled type="radio" name="displayOptions" id="displayVertical" value="vertical">vertical (coming soon)' +
  '</label>';
$('#choose-compare').html(availableChoices);

$('.matrix-option-checkbox').on('click', function( ev ) {
   if($(this).is(':checked')) {
     solutionsToView.push(ev.currentTarget.dataset.solutionId);
   }
   else {
     solutionsToView.splice( solutionsToView.indexOf(
         ev.currentTarget.dataset.solutionId), 1);
  }
});
