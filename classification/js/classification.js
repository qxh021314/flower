new Vue({
    el: '#app',
    data: {
        styleData: 'color: #ef5e0d;border-bottom: 1px solid #ef5e0d;',
        styleDataOne: '',
        styleDataTwo: '',
        styleDataThree: '',
        content: ''
    },
    mounted() {
        this.styleDataOne = this.styleData
    },
    methods: {
        muiClick(val) {
            console.log(val)
            if (val === 'one') {
                this.styleDataOne = this.styleData
                this.styleDataTwo = ''
                this.styleDataThree = ''
                this.content = '12345'
            } else if (val === 'two') {
                this.styleDataOne = ''
                this.styleDataTwo = this.styleData
                this.styleDataThree = ''
                this.content = '67890'
            } else if (val === 'three') {
                this.styleDataOne = ''
                this.styleDataTwo = ''
                this.styleDataThree = this.styleData
            }
        }
    }
})
// $(".mui_click li").on('click', function () {
//     console.log('---')
// })
