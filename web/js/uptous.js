// JavaScript code used by the UpToUs application


function member2html( oneMember ) {
   var theHtml = '<div ';
   membersHtml +=
     '<p>' +
     'email: ' + value.email + ' ' +
     'firstName: ' + value.firstName + ' ' +
     'lastName: ' + value.lastName + ' ' +
     '</p>';
   theHtml += '</div>';
   return theHtml;
}
var members = {};
var events = {};

function utuEvent(eData) {
  this.id = eData.id;
  this.title = eData.title;
  this.description = eData.description;

  this.toHtml = function() {
      return '<tr><td>' + this.title + '</td>' +
	'<td><button id="' + this.eventIndex +
	'" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#eventDetails">' +
	'Details</button></td>' +
	'</tr>';
      }
  }
  function toString() {
  return 'event: ' + title;
}

$('#userDetails').on('show.bs.modal', { value: 'foo' }, function (e) {
  // if (!data) return e.preventDefault() // stops modal from being shown
  var value;
  var memberIndex = $(e.relatedTarget).attr('id');
  members.some(function(element, index, array) {
    if (element.memberIndex == memberIndex) {
      var modalText = 'Information for User<br />' +
           'User Name: ' + element.firstName + ' ' + element.lastName + '<br />' +
	   'Email: ' + element.email + '<br />' +
	   (element.address ? element.address + '<br />' : '') +
	   (element.city ? element.city + '<br />' : '') +
	   (element.state ? element.state + '<br />' : '') +
	   (element.zipcode ? element.zipcode + '<br />' : '') +
	   (element.phone ? element.phone + '<br />' : '');
      $('#email').html(modalText);
      return true;
    }
    return false;
  });
});

    jQuery.ajax({
      url: "https://www.uptous.com/api/members",
      type: "GET",
      dataType: 'json',
      xhrFields: {
	withCredentials: true
      },
      crossDomain: true,
      success: function(data, textStatus, jqXHR) {
	members = data;
	var membersHtml = '<table class="table table-bordered">';
	var memberIndex=0;
	data.forEach(function(value, index, array) {
	value.memberIndex = memberIndex;
	membersHtml += '<tr><td>' + value.firstName + ' ' + value.lastName + '</td>' +
	  '<td><button id="' + memberIndex++ + '" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#userDetails">' +
	  'Details</button></td>' +
	  '</tr>';
	});
	membersHtml += '</table>';
	$('div#members').html(membersHtml);
      },
      error: function( jqXHR, textStatus, errorThrown ) {
	console.error(errorThrown);
      }
    });

    jQuery.ajax({
      url: "https://www.uptous.com/api/events",
      type: "GET",
      dataType: 'json',
      xhrFields: {
	withCredentials: true
      },
      crossDomain: true,
      success: function(data, textStatus, jqXHR) {
	events = [];
	var eventsHtml = '<table class="table table-bordered">';
	var eventIndex=0;
	data.forEach(function(value, index, array) {
	  value.eventIndex = eventIndex;
	  var newEvent = new utuEvent(value);
	  eventsHtml += newEvent.toHtml();
	  // eventsHtml += '<tr><td>' + value.title + '</td>' +
	    // '<td><button id="' + eventIndex++ +
	    // '" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#eventDetails">' +
	    // 'Details</button></td>' +
	    // '</tr>';
	  });
	eventsHtml += '</table>';
	$('div#events').html(eventsHtml);
      },
      error: function( jqXHR, textStatus, errorThrown ) {
	console.error(errorThrown);
      }
    });
