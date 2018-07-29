// // TARGET ALL CODE EXAMPLES WHICH HAVE BEEN LABELLED AS HTML
var code = document.querySelectorAll(
	'pre[data-lang="html"] code, pre[data-lang="twig"] code'
);
if (code) {
	code.forEach(function(e) {
		e.innerHTML = e.innerHTML.replace(/</g, "&lt;");
		e.innerHTML = e.innerHTML.replace(/>/g, "&lt;");
	});
}

var article = document.querySelector("article");

if (article) {
	var chapters = document.querySelector(".chapters__list"),
		chapters__toggle = document.querySelector(".chapters__toggle"),
		headings = document.querySelectorAll(
			"article h1, article h2, article h3, article h4, article h5, article h6"
		);

	headings.forEach(function(currentValue) {
		var a = document.createElement("a");
		var li = document.createElement("li");
		li.classList.add("chapter");
		var value = currentValue.tagName.toLowerCase();
		li.classList.add(`chapter--${CSS.escape(value)}`);
		li.setAttribute("data-id", currentValue.innerHTML);
		li.appendChild(document.createTextNode(currentValue.innerHTML));
		if (currentValue.id != "") {
			a.appendChild(li);
			a.title = currentValue.id;
			a.href = "#" + currentValue.id;
			chapters.appendChild(a);
		} else {
			chapters.appendChild(li);
		}
	});

	chapters__toggle.addEventListener("click", function(e) {
		e.preventDefault();
		chapters__toggle.classList.toggle("active");
		console.log("clicked");
	});

	window.addEventListener(
		"scroll",
		function(event) {
			headings.forEach(function(currentValue, currentIndex, listObj) {
				var topPos = currentValue.getBoundingClientRect().top;

				if (topPos - 200 < 0) {
					var chapter = document.querySelectorAll(".chapter");
					chapter.forEach(function(currentValue, currentIndex, listObj) {
						currentValue.classList.remove("current");
					});

					var value = currentValue.innerHTML;
					var match = document.querySelector(`[data-id=${CSS.escape(value)}]`);
					match.classList.add("current");
				}
			});
		},
		false
	);
}
