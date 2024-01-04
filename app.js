const app = Vue.createApp({
    //data, functions
    //template: "<h2>I am the template</h2>"
    data() {
        return {
            url: "http://www.google.ca",
            books: [
                { id: 0, title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
                { id: 1, title: 'the way of kings', author: 'brandon saunderson', img: 'assets/2.jpg', isFav: false }, 
                { id: 2, title: 'the final empire', author: 'brandon saunderson', img: 'assets/3.jpg', isFav: true}
            ],
            showBooks: false,
            title: "The Final Empire",
            author: 'Brandon Saunderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleIsFav(arg) {
            this.books[arg].isFav = !this.books[arg].isFav
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((item) => item.isFav)
        }
    }

})

app.mount('#app')