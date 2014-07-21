

function AcqSolution( o ) {

   $.extend(true, this, o);

}


var solutionListHtml = '';
[ "one", "two", "three", "four" ].forEach( function( item, itemIndex, itemArray) {

    solutionListHtml += '<div class="list-group">' +
    '<a href="#" class="list-group-item">' +
    '<h4 class="list-group-item-heading bg-primary">' +
    'Solution #' + item +
    '</h4>' +
    '<div class="row">' +
       '<div class="col-md-1">' +
         '<button id="edit-' + item + '" type="button" title="Edit"' +
         'class="btn btn-default btn-lg">' +
         '<span class="glyphicon glyphicon-edit"></span>' +
         '</button>' +
         '<br />' +
         '<button id="copy-' + item + '" type="button"' +
         'class="btn btn-default btn-lg">' +
         '<span class="glyphicon glyphicon-plus"></span>' +
         '</button>' +
         '<br />' +
         '<button id="delete-' + item + '" type="button"' +
         'class="btn btn-default btn-lg">' +
         '<span class="glyphicon glyphicon-trash"></span>' +
         '</button>' +
       '</div> <!-- col-md-1 -->' +
       '<div class="col-md-8">' +
       'This is the information on Solution Number ' + item + '.' +
       '</div> <!-- col-md-8 -->' +
       '<div class="col-md-3 bg-warning">' +
           'this could be a picture for solution ' + item +
       '</div> <!-- col-md-3 -->' +
     '</div> <!-- row -->' +
    '</a>' +
  '</div> <!-- list-group -->';
});
$('#solution-list').html(solutionListHtml);

