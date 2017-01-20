function setupConsole() {
    // console.log("setup console");
	let console_log = null;
	let console_div = null;
	if (console.log) {
		console_log = console.log;

        console_div = $("<div class='lab-console'>");
        $("body").append(console_div);





		// console.log(console_div);
		console.log = function() {
            let line = $("<div>");
            // for (var i = 0; i < arguments.length; i++) {
            //     let arg = arguments[i];
            // }
            let args = [].slice.call(arguments);

            line.append(args.join(", "));

    		console_div.append(line);
			console_log.apply(this, arguments);
		};

	}

}
