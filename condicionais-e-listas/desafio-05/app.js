new Vue({
	el: '#desafio',
	data: {
		isDifferent: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		books: [
			{
				title: 'O Senhor dos Anéis',
				author: 'J.R.R. Tolkiens',
				volume: '3'
			},
			{
				title: 'Coach do foda-se',
				author: 'Diva Depressão',
				volume: '1'
			}
		],
		students: {
			id: 10,
			name: 'Maria',
			rates: [7.67, 8.33, 6.98, 9.21]
		}
	}
});
