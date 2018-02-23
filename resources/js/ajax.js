"use strict";

let ajaxGet = function(url, success, error) {
	let getRequest = new XMLHttpRequest();
	getRequest.open("GET", url);
	getRequest.timeout = 10 * 1000;


	getRequest.addEventListener("load", function(evt) {
		if(getRequest.status >= 200 && getRequest.status < 300) {
			success(evt, getRequest.responseText);
			document.getElementById("visible").style.display="none";
		}
		else {
			error(evt);
		}
	});

	getRequest.addEventListener("error", error);
	getRequest.addEventListener("timeout", error);

	getRequest.send();
};

ajaxGet("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=SK&key=AIzaSyAzFTukxdYnnDoNUCuINhkktOoI75qnjyk",
	function(evt, data) {
		JSON.parse(data).items.forEach(function(element) {
			let newLi = document.createElement("li");
			let newLink = document.createElement("a");
			newLink.setAttribute("href", "https://www.youtube.com/watch?v=" + element.id);
			let newText = document.createTextNode(element.snippet.title);
			newLink.appendChild(newText);
			newLi.appendChild(newLink);
			let currentNode = document.querySelector("ol");
			currentNode.appendChild(newLi);
		});

	});
