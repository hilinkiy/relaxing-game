const board = document.querySelector('#board');
const colors = ['#9381ff', '#023047', '#890620', '#84dcc6', '#fee440', '#ff006e'];
const squaresNumber = 999;

for (let i = 0; i < squaresNumber; i++) {
	const square = document.createElement('div');
	square.classList.add('square')
	square.addEventListener('mouseover', () => setColor(square))
	square.addEventListener('mouseleave', () => clearColor(square))
	board.append(square);
}

const setColor = (el) => {
	const color = getRandomColor()
	el.style.backgroundColor = color;
	el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const clearColor = (el) => {
	el.style.boxShadow = `0 0 2px #000`;
	el.style.backgroundColor = `#1d1d1d`;
}

const getRandomColor = () => {
	const index = Math.floor(Math.random() * colors.length)

	return colors[index]
}