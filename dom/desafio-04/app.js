new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classeAdicional: '',
		classe4: '',
		quadrado: '',
		novoEstilo: {
			width: '100px',
			height: '100px'
		},
		color: '',
		progressoWidth: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 10;
				this.progressoWidth = `${valor}%`;
				if(valor >= 100){
					clearInterval(temporizador);
				}
			}, 1000);
			
			
		},
		setClass(event) {
			if(event.target.value === 'true'){
				this.quadrado = true
			} else if(event.target.value === 'false'){
				this.quadrado = false
			}
		}
	}
})
