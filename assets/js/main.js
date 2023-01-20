/*
 * Mukena Larizka
 * Designed by Degiam [https://degiam.com]
 * Copyright (c) 2022
 */

function urlEncoder(selector,data,attribute) {
	document.querySelectorAll(selector).forEach(item => {
		item.setAttribute(attribute,item.getAttribute(attribute) + encodeURI(item.getAttribute(data)))
	})
}
urlEncoder('a[data-title]','data-title','href')

function backTop(selector) {
	document.querySelectorAll(selector).forEach(item => item.onclick = () => document.querySelector('.viewport').scrollTo({behavior:'smooth',top:0}) )
}
backTop('#backTop')