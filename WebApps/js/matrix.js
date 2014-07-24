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

function getSolutionBySolutionId( solutions, id) {
    var theSolution = {};
    solutions.some( function ( thisSolution, solIndex, solArray ) {
        if (thisSolution.id === id) {
        theSolution = thisSolution;
        return true;
        }
    });

    return theSolution;
}

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

/* This is for reference 
                     <div class="panel panel-default">
                        <div class="panel-heading">
                           <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#inner-accordion" href="#subCollapseTwo">
                                 SUB COLLAPSE Two
                              </a>
                           </h4>
                        </div> <!-- panel-heading -->
                        <div id="subCollapseTwo" class="panel-collapse collapse in">
                           <div class="panel-body">
                              Contents of SUB COLLAPSE Two
                           </div> <!-- panel-body -->
                        </div> <!-- panel-collapse -->
                     </div> <!-- panel -->
                     <div class="panel panel-default">
                        <div class="panel-heading">
                           <h4 class="panel-title">
                              <a data-toggle="collapse" data-parent="#inner-accordion" href="#subCollapseThree">
                                 SUB COLLAPSE Three
                              </a>
                           </h4>
                        </div> <!-- panel-heading -->
                        <div id="subCollapseThree" class="panel-collapse collapse in">
                           <div class="panel-body">
                              Contents of SUB COLLAPSE Three
                           </div> <!-- panel-body -->
                        </div> <!-- panel-collapse -->
                     </div> <!-- panel -->

 */
/* This is for reference 
'</a>' +
'</h4>' +
'</div> <!-- panel-heading -->' +
'<div class="panel panel-default">' +
'<div class="panel-heading">' +
'<h4 class="panel-title">' +
'<a data-toggle="collapse" data-parent="#inner-accordion" href="#subCollapseThree">' +
                                 SUB COLLAPSE Three' +
'</a>' +
'</h4>' +
'</div> <!-- panel-heading -->' +
'<div id="subCollapseThree" class="panel-collapse collapse in">' +
'<div class="panel-body">' +
                              Contents of SUB COLLAPSE Three' +
'</div> <!-- panel-body -->' +
'</div> <!-- panel-collapse -->' +
'</div> <!-- panel -->' +

 */
var solutionsToEditHtml = '';

itHwSolutions.forEach( function( item, itemIndex, itemArray) {

    solutionsToEditHtml += '<div class="panel panel-default">' +
        '<div class="panel-heading">' + '<h4 class="panel-title">' +
        '<a data-toggle="collapse" data-parent="#inner-accordion" href="subCollapse-' +
        item.id + '">' +
        item.name +
        '</a></h4></div> <!-- panel-heading -->' +
        '<div id="subCollapse-' + item.id + '" class="panel-collapse collapse in">' +
        '<div class="panel-body">' +




    '<div class="row">' +
       '<div class="col-md-1">';
         [
           { action: 'edit', actionName: 'Edit', actionGlyphicon: 'edit'},
           { action: 'copy', actionName: 'Copy', actionGlyphicon: 'plus'},
           { action: 'delete', actionName: 'Delete', actionGlyphicon: 'trash'},
         ].forEach( function(action, actionIndex, actionArray) {
             solutionsToEditHtml +=
                 '<button id="soln-action-' + action.action +'-' +
                 item.id + '" type="button" title="'+ action.actionName +
                 '"' + 'class="btn btn-default btn-lg" data-button-action="' +
                 action.action +'"' + 'data-solution="' + item.id + '">' +
                 '<span class="glyphicon glyphicon-' + action.actionGlyphicon +
                 '"></span>' + '</button>' + '<br />';
         });
         solutionsToEditHtml +=
       '</div> <!-- col-md-1 -->' +
       '<div class="col-md-6">' +
          '<div class="list-group">' +
                '<h4 class="list-group-item-heading">Solution Overview</h4>' +
                '<p class="list-group-item-text">' +
                'Award Type: ' +
                item.type + '.</p>' +
             '</a>' +
             '<a href="#" class="list-group-item">' +
                '<p class="list-group-item-text">' +
                'Availability: ' +
                item.availability.federal[0] + '.</p>' +
             '</a>' +
          '</div> <!-- list group -->' +
       '</div> <!-- col-md-6 -->' +
       '<div class="col-md-3 bg-warning">' +
           'this could be a picture for solution ' + item.name +
       '</div> <!-- col-md-3 -->' +
     '</div> <!-- row -->' +



        '</div> <!-- panel-body -->' +
        '</div> <!-- panel-collapse -->' +
        '</div> <!-- panel -->';

});
$('#inner-accordion').html(solutionsToEditHtml);

$('button[id^="soln-action-"]').on('click',function( ev) {
   var solution = getSolutionBySolutionId( itHwSolutions,
                       ev.currentTarget.dataset.solution);
   switch ( ev.currentTarget.dataset.buttonAction ) {
      case 'edit':
      $('#solution-editor').modal();
      break;

      case 'copy':
      $('#solution-copier').modal();
      break;

      case 'delete':
      $('#proposed-delete').
        val(ev.currentTarget.dataset.solution);
      $('#solution-deleter').modal();
      break;

      default:
      alert('I don\'t know what you want of me.');
      break;
   }
});

$('#solution-editor').on('show', function (ev) {
    $('#edit-form-group').html('that will show you');
});


/*

<div id="edit-form-group" class="form group">
                <label for="I am a thing that I am">Save Copy As</label>               <input type="text" class="form-control" id="proposed-name" placeholder="you cant read this anymore">

                */
