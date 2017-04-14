document.getElementById("title").textContent = generateTitle();
document.getElementById("subtitle").textContent = generateSubtitle();


function generateTitle() {
	var name_prefixes =
		[
			"King",
			"Queen",
			"Professor",
			"Madam",
			"Mister",
			"Sir",
			"Lady",
			"Doctor"
		];

	var primary_nouns =
		[
			"Oak",
			"Cotton",
			"Stone",
			"Moon",
			"Sun",
			"Star",
			"Knife",
			"Clock",
			"Midnight",
			"Forgetful",
			"Careful",
			"Chestnut",
			"Crab",
			"Sky",
			"Fox",
			"Hound",
			"Tree"
		];

	var adjectives =
		[
			"Lost",
			"Three",
			"Two",
			"Forgotten",
			"Fallen",
			"Pack of",
			"Valiant",
			"Golden",
			"Many",
			"Merry",
			"Clever",
			"Wonderful",
			"Sullen",
			"Angry",
			"Little",
			"Cowardly",
			"Silver",
			"Last",
			"Jolly",
			"Festive",
			"Gleeful",
			"Enchanted",
			"Wise",
			"Wistful",
			"Dark",
			"Untold"
		];

	var secondary_nouns =
		[
			"Riddles",
			"Parables",
			"Fables",
			"Predicaments",
			"Trials",
			"Words",

			"Promises",
			"Lies",

			"Pests",
			"Beasts",
			"Trolls",
			"Shades",

			"Shadows",
			"Woods",
			"Lands",
			"Forests",

			"Brothers",
			"Sisters",
			"Children",

			"Days",
			"Nights",
			"Years",
			"Hours"
		];

	var name_prefix = _.sample(name_prefixes);
	var primary_noun = _.sample(primary_nouns);
	var adjective = _.sample(adjectives);
	var secondary_noun = _.sample(secondary_nouns);

	var title = "";
	if (Math.random() < 0.5) {
		title = name_prefix + " " + primary_noun + " and the " + adjective + " " + secondary_noun;
	}
	else {
		title = "The " + adjective + " " + secondary_noun + " of " + name_prefix + " " + primary_noun;
	}

	return title;
}

function generateSubtitle() {
	var story_adjectives =
		[
			"Lost",
			"Forgotten",
			"Merry",
			"Clever",
			"Wonderful",
			"Sullen",
			"Little",
			"Cowardly",
			"Jolly",
			"Festive",
			"Gleeful",
			"Enchanted",
			"Wise",
			"Wistful",
			"Dark",
			"Untold",
			"Secret"
		];


	var story_formats =
		[
			"Tale",
			"Novel",
			"Book in Three Parts",
			"Song",
			"Short Story",
			"Legend",
			"Mystery",
			"Comedy",
			"Musical",
			"Production",
			"Lesson"

		];

	var adjective = _.sample(story_adjectives);
	var format = _.sample(story_formats);
	var subtitle = "A " + adjective + " " + format;

	return subtitle;
}
