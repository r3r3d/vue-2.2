let eventBus = new Vue()
let app = new Vue({
    el: '#app',
    data: {
        task: [],
        task1:null
    },
    methods: {

        onSubmit() {
            if(this.task1){
                let taskRecon = {
                    task:this.task1
                }
                eventBus.$emit('task-submitted', taskRecon)
                this.task1 = null
            }
        }},
        mounted() {
            eventBus.$on('task-submitted', taskRecon => {
                this.task.push(taskRecon)
            })
    }
})
