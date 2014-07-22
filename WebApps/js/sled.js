

function AcqSolution( o ) {

   $.extend(true, this, o);

}

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

var solutionListHtml = '';
itHwSolutions.forEach( function( item, itemIndex, itemArray) {

    solutionListHtml += '<div class="list-group">' +
    '<a href="#" class="list-group-item">' +
    '<h3 class="list-group-item-heading bg-primary">' +
    item.name +
    '</h3>' +
    '<div class="row">' +
       '<div class="col-md-1">';
         [
           { action: 'edit', actionName: 'Edit', actionGlyphicon: 'edit'},
           { action: 'copy', actionName: 'Copy', actionGlyphicon: 'plus'},
           { action: 'delete', actionName: 'Delete', actionGlyphicon: 'trash'},
         ].forEach( function(action, actionIndex, actionArray) {
             solutionListHtml +=
                 '<button id="soln-action-' + action.action +'-' +
                 item.id + '" type="button" title="'+ action.actionName +
                 '"' + 'class="btn btn-default btn-lg" data-button-action="' +
                 action.action +'"' + 'data-solution="' + item.id + '">' +
                 '<span class="glyphicon glyphicon-' + action.actionGlyphicon +
                 '"></span>' + '</button>' + '<br />';
         });
         solutionListHtml +=
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
    '</a>' +
  '</div> <!-- list-group -->';
});
$('#solution-list').html(solutionListHtml);
$('button[id^="soln-action-"]').on('click',function( ev) {
   var solution = getSolutionBySolutionId( itHwSolutions,
                       ev.currentTarget.dataset.solution);
   switch ( ev.currentTarget.dataset.buttonAction ) {
      case 'edit':
      alert('Edit ' + ev.currentTarget.dataset.solution);
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

