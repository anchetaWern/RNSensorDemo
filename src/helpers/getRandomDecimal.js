const getRandomDecimal = (min, max) => {
	return Math.random() * (max - min) + min;
}

export default getRandomDecimal;