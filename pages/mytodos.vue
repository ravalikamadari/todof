<template>
    <div>
        <TaskHeader/>

      <div id="todo" class="header">
        <h2>My Todos</h2>
        <input type="text" id="task" placeholder="Title..." v-model="todo" />
        <span @click="addTodo(todo)" class="addBtn">Add New</span>
      </div>
      <ul id="list">
        <li v-for="(task, i) in $store.state.mytasks" :key="i"><span style="width:300px;">{{task.description}}</span>
        <span><button @click="deleteTodo(task.id)" class="btn">Delete</button></span>
        <span><button  class="btn" v-if="task.isCompleted == false" @click="update(task.id)">Complete</button></span>
        <span><button  class="btn" v-if="task.isCompleted == true" >Completed</button></span>
        </li>
      </ul><br>


    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: '',
        }
    },
    created() {
        this.getMyTodos();
    },
    methods: {
    async getMyTodos() {
          await   this.$store.dispatch('getMyTodos')
        },
     async   addTodo(todo) {
          await  this.$store.dispatch('addTodo', todo);
          await  this.$store.dispatch('getMyTodos');
        },
     async   deleteTodo(id) {
          await  this.$store.dispatch('deleteTodo', id);
          await  this.$store.dispatch('getMyTodos')
        },
      async  update(id) {
         await   this.$store.dispatch('update', id);
          await   this.$store.dispatch('getMyTodos')


        }
    }

}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}
.btn{
  margin-left:400px;
  background-color: #55c666; /* Green */
  border: none;
  padding: 15px 15px;
  cursor: pointer;
  


}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the delete button */
.delete {
  position: absolute;
  right: 0;
  /* left: 50%; */
  top: 0;
  padding: 12px 16px 12px 16px;
}

.delete:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #28b396;
  padding: 5px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add New" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
