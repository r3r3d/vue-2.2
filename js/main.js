let eventBus = new Vue()
let app = new Vue({
    el: '#app',
    data: {
        tasks: [],
        task1:null,
        task2:null,
        task3:null,
        task4:null,
        task5:null,
        name:null



    },
    methods: {

        onSubmit() {
           let taskRecon = {
               name: this.name,
               task1: this.task1,
               task2: this.task2,
               task3: this.task3,
               task4: this.task4,
               task5: this.task5,
           }
           eventBus.$emit('task-submitted', taskRecon)
            this.name = null
            this.task1 = null
            this.task2 = null
            this.task3 = null
            this.task4 = null
            this.task5 = null
            }
        },
        mounted() {
            eventBus.$on('task-submitted', taskRecon => {
                this.tasks.push(taskRecon)
            })
    }
})
