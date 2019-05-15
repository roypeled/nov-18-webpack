import cat from './cat.jpeg';

export function sum(a, b) {
	return a+b;
}

export function sayHello(el$) {
	el$.append(`<h1><img src="${cat}">Hello class!!!!</h1>`);
}
