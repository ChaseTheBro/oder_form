var app = new Vue({
    el: '#refound',
    data: {
        start: true,
        waiting: false,
    },
    methods: {
        render: function(){
            this.start = false;
            this.waiting = true;
        }
    },
})