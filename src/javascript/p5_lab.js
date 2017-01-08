var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow");
editor.getSession().setMode("ace/mode/javascript");
editor.$blockScrolling = Infinity;



var script_name = window.location.search.substr(1);


if (script_name === "") {
	script_name = "template.js";
}

var jqxhr = $.ajax({
	url: script_name,
	success: function(source) {
		editor.setValue(source);
		editor.gotoLine(1);
	},
	dataType: "text"
});


$('#preview').load( function() {
	var source = editor.getValue();
	var frame = $('#preview')[0];
	if (frame.contentWindow.take) {
		frame.contentWindow.take(source);
	}
});

function inject() {
	// var source = editor.getValue();
	// var newUrl = "p5_view.html?" + "data:script/javascript;base64," + btoa(source);
	var frame = $('#preview')[0];
	frame.contentWindow.location.replace("p5_view2.html");
}


editor.getSession().on('change', function(e) {
	debounce(500, inject);
});



var timeout = null;

function debounce(threshold, func) {
	if (timeout) {
		clearTimeout(timeout);
	}
	timeout = setTimeout(func, threshold || 100);
}
