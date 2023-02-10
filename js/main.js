
Vue.component ('first-list', {
    template: `
            <input type="text" @keyup.enter="addNote" v-model="currentNote">

        <ul>
            <li v-for="note in notes">
                <input type="text" v-if="note.isEditing" @keyup.enter="editNote(note.text)" v-model="editValue">
                <span>{{note.text}}</span>
                <button @click="removeNote(note.text)">Delete</button>
                <button @click="changeEditing(note.text)">Edit</button>
            </li>
        </ul>
    `,

})
let app = new Vue({
    el: '#app',
    editValue:'',
    data: {
            currentNote: '',
            notes: [
                {
                    text: "adas",
                    isCompleted: false,
                    isEditing: false
                },

                {
                    text: "adasasd",
                    isCompleted: false,
                    isEditing: false
                }
            ]
        },
    methods: {
                addNote: function(){
                    this.notes.push({
                        text: this.currentNote,
                        isCompleted: false

                    });
                    this.currentNote='';
                },
                removeNote: function(noteText){
                    this.notes = this.notes.filter(note => {
                        return note.text !== noteText;
                    })

                },
                changeEditing: function (noteText) {
                    this.editValue = noteText;
                    this.notes = this.notes.map(
                        note => {
                            if(note.text === noteText){
                                note.isEditing = !note.isEditing;
                            }
                            return note;
                        })
                },
                editNote: function (noteText){
                    this.notes = this.notes.map(note =>{
                        if(note.text === noteText){
                            note.isEditing = !note.isEditing;
                            note.text = this.editValue;
                        }
                        return note;
                    })
                }
          },
})