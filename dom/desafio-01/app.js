new Vue({
    el: '#desafio',
    data: {
        name: 'Gabriela',
        age: 26,
        image: 'https://s2.glbimg.com/2yK3rTPvEDofzpusIhAgrkasz9A=/e.glbimg.com/og/ed/f/original/2019/09/30/oriontree_fairbairn_960.jpg'
    },
    methods: {
        randomNumber(){
            return Math.random();
        },
        ageTimes3(){
            return this.age * 3;
        }
    }
})