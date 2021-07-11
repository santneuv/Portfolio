/*--------------------------
    Project Name: PORTFOLIO
---------------------------*/

/* ---------------------------- $$$ ---  PORTFOLIO --- $$$ ---------------------------- */

$(document).ready(function () {
	$(".img-area").fancybox();
});


/* ---------------------------- $$$ --- GRID --- $$$ ---------------------------- */

$(window).on('load', function () {
	if ($('.a-grid').length) {
		$('.a-grid').isotope({
			itemSelector: '.card'
		});
		$('.a-grid-filter a').on('click', function () {
			$(this).parents('.a-grid-filter').find('.active').removeClass('active');
			$(this).parent().addClass('active');
			var filterValue = $(this).attr('data-filter');
			$('.a-grid').isotope({
				filter: filterValue
			});
		});
	}
	if ($('.a-grid-line').length) {
		$('.a-grid-line').isotope({
			itemSelector: '.card',
			layoutMode: 'fitRows'
		});
		$('.a-grid-filter a').on('click', function () {
			$(this).parents('.a-grid-filter').find('.active').removeClass('active');
			$(this).parent().addClass('active');
			var filterValue = $(this).attr('data-filter');
			$('.a-grid-line').isotope({
				filter: filterValue
			});
		});
	}
});


/* ---------------------------- $$$ --- HEADER --- $$$ ---------------------------- */

let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
	let fromTop = window.scrollY;

	mainNavLinks.forEach(link => {
		let section = document.querySelector(link.hash);

		if (
			section.offsetTop <= fromTop &&
			section.offsetTop + section.offsetHeight > fromTop
		) {
			link.classList.add("current");
		} else {
			link.classList.remove("current");
		}
	});
});


/* ---------------------------- $$$ --- COMMENT --- $$$ ---------------------------- */

var sendButton = document.getElementById('cta');
var textEl = document.getElementById("text-area")
var innerDiv = document.getElementById('ul-el');
var authorEl = document.getElementById('author');
var topicEl = document.getElementById('topic');

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();



sendButton.addEventListener('click', function () {

	today = dd + '/' + mm + '/' + yyyy;
	innerDiv.innerHTML = innerDiv.innerHTML + '<li class="comment-item"><div onclick="$(this).parent().hide();" class="delete"><i class="fas fa-trash"></i></div><div class="comment__avatar"><lord-icon src="https://cdn.lordicon.com//dxjqoygy.json" trigger="loop-on-hover" colors="primary:#121331,secondary:#08a88a" style="width:60px;height:60px"></lord-icon></div><div class="comment-content"><h4 class="comment-topic">' + topicEl.value + '</h4><h5 class="comment-author"> ' + authorEl.value + '</h5> <span class="comment-date">' + today + '</span><p class="comment-desc">' + textEl.value + '</p></div></li>';
	textEl.value = " ";
	authorEl.value = " ";
	topicEl.value = " ";
});