let eventBus = new Vue()

Vue.component('task-up',{
    template:`
    <div>
       <p v-if="!tasks.length">There are no  yet.</p>
    <ul v-else>
        <li v-for="task in tasks">
            <p>{{ task.task1 }} <button v-on:click="removeOne">Скрыть</button></p>
            <p>{{ task.task2 }} <button v-on:click="removeTwo">Скрыть</button></p>
            <p>{{ task.task3 }} <button v-on:click="removeTree">Скрыть</button></p>
            <p>{{ task.task4 }} <button v-on:click="removeFour">Скрыть</button></p>
            </li>
    </ul> 
    </div>
  
    `,
    data(){
        return{
            tasks: [],
            toggle1: true
        }

    },
    mounted()
    {
        eventBus.$on('task-submitted', taskRecon => {
            this.tasks.push(taskRecon)
        })
    },
    methods: {
        removeOne() {
            this.$emit('remove-One'), this.tasks.splice(0,2)
        },
        removeTwo() {
            this.$emit('remove-Two'), this.tasks.splice()
        },
        removeTree() {
            this.$emit('remove-Tree'), this.tasks.splice()
        },
        removeFour() {
            this.$emit('remove-Four'), this.tasks.splice()
        }

        // remove(){
        //     console.log(1)
        //     this.$emit('remove'), this.tasks.splice(-1)
        // }
    }

})
Vue.component('cart-create',{
    template: `
<form class="review-form" @submit.prevent="onSubmit">
                        <p>
                            <label for="task1">Задача1:</label>
                            <input id="task1" v-model="task1"required>
                        </p>
                         <p>
                            <label for="task2">Задача2:</label>
                            <input id="task2" v-model="task2"required>
                        </p>
                         <p>
                            <label for="task3">Задача3:</label>
                            <input id="task3" v-model="task3"required>
                        </p>
                         <p>
                            <label for="task4">Задача4:</label>
                            <input id="task4" v-model="task4"required>
                        </p>

                        <p> <input type="submit" value="Сохранить" >
                        </p>
                    </form>
`,
    data() {
        return {
            tasks1:[],
            task1:null,
            task2:null,
            task3:null,
            task4:null

        }
    },
    methods:{
        onSubmit() {
            let taskRecon = {
                name: this.name,
                task1: this.task1,
                task2: this.task2,
                task3: this.task3,
                task4: this.task4,

            }
            eventBus.$emit('task-submitted', taskRecon)
            this.name = null
            this.task1 = null
            this.task2 = null
            this.task3 = null
            this.task4 = null
        },

    },
})
let app = new Vue({
    el: '#app',
    data: {

    },
    methods: {
    }
})