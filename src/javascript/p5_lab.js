// configure ace editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow");
editor.getSession().setMode("ace/mode/javascript");
editor.$blockScrolling = Infinity;


// pull script name from url get string
var script_name = window.location.search.substr(1);
if (script_name === "") {
	script_name = "template.js";
}

// load content of script, inject into editor
var jqxhr = $.ajax({
	url: script_name,
	success: function(source) {
		editor.setValue(source);
		editor.gotoLine(1);
	},
	dataType: "text"
});


// detect when the preview is reloaded. send it the code to show
$('#preview').load( function() {
	// console.log("preview load");
	var source = editor.getValue();
	var frame = $('#preview')[0];
	if (frame.contentWindow.take) {
		frame.contentWindow.take(source);
	}
});


// reload the preview iframe. the actual injection happens when the iframe is done loading.
function inject() {
	// var source = editor.getValue();
	// var newUrl = "p5_view.html?" + "data:script/javascript;base64," + btoa(source);
	var frame = $('#preview')[0];
	frame.contentWindow.location.replace("p5_lab_view.html");
}


// when editer changes tell the preview to reload
editor.getSession().on('change', function(e) {
	debounce(500, inject);
});


// debounce waits "threshold" milliseconds and then calls the provided function
// if another call to debounce happens before the function is called, the old call is canceled and the new call is queued
var timeout = null;
function debounce(threshold, func) {
	if (timeout) {
		clearTimeout(timeout);
	}
	timeout = setTimeout(func, threshold || 100);
}
