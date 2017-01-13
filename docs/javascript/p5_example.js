var base_url = base_url || "/";

$(function() {
	$(".p5_example.show-lab").each(function(i, e) {
		var preview = $('<div class="ratio-16-9"></div>');
		var iframe = $('<iframe scrolling="no"></iframe>').attr("src", base_url +  "p5_lab.html?" + e.href);
		preview.append(iframe);

		preview.insertBefore(e);
	});

	$(".p5_example.show-preview").each(function(i, e) {
		var preview = $('<div class="ratio-16-9"></div>');
		var iframe = $('<iframe scrolling="no"></iframe>').attr("src", base_url + "p5_view.html?" + e.href);
		preview.append(iframe);

		preview.insertBefore(e);
	});

	$(".p5_example.show-code").each(function(i, e) {
		var pre = $('<pre></pre>');
		var code = $('<code class="language-javascript">hello();</code>');
		pre.append(code);

		code.load(e.href, function() {
			hljs.highlightBlock(code.get(0));
		});

		pre.insertBefore(e);
	});


	$(".p5_example.show-lab-link").each(function(i, e) {
		var bar = $("<div class='button-bar'>");
		var link = $("<a class='lab-link btn btn-xs btn-primary'>Open in Editor</a>").attr("href", base_url + "p5_lab.html?" + e.href);
		bar.append(link);

		bar.insertBefore(e);
	});

	$(".p5_example.show-titled-lab-link").each(function(i, e) {
		var bar = $("<div class='button-bar'>");
		var link = $("<a class='lab-link btn btn-xs btn-primary'>Open "+$(e).text()+" in Editor</a>").attr("href", base_url + "p5_lab.html?" + e.href);
		bar.append(link);

		bar.insertBefore(e);
	});

});
