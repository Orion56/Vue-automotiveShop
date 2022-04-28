<template>
<section id="shopping">
    <h1>{{compName}}</h1>
    <form @submit.prevent="" @scroll="toggleForm">
        <h5>Start adding new items</h5>
        <input @keyup.enter="saveNew" type="text" name="" id="" placeholder="Type to add a new item" v-model.trim="newItem">
        <label for="itemPriority">
        <input v-model="priority" type="checkbox" id="itemPriority">
        High Priority!
        </label>
        <div class="controls">
        <button @click="saveNew" type="button" :disabled="newItem.length <3 ">Save Item</button>
        </div>
    </form>
    <p v-if="items.length===0">Your Shopping list is Empty..</p>
    <ul v-for="item in items" :key="item.id">
        <li :class="{imp:item.priority,done:item.done}" 
        @click="toggleDone(item)">
        {{item.id}}- {{item.value}}
        </li>
    </ul>
</section>
</template>

<script>
export default {
data(){
    return{
        compName: "Shopping list",
        items:[],
        newItem: "",
        priority: false,
        done: false
    }
},
methods: {
    saveNew(){
        if(this.newItem!='' && this.newItem.length>=3) this.items.push({id:this.items.length+1, value: this.newItem, priority: this.priority, done:this.done})
        this.newItem=''
        this.priority=false
    },
    toggleForm(){
        const addForm = this.document.querySelector('form')
        addForm.classList.toggle('hide')
    },
    toggleDone(item){
        item.done=!item.done
    }
}
}
</script>

<style>
#shopping{
    width: 70%;
    padding: 10px;
    margin: 5px auto;
    border: solid red 1px;
}
#shopping ul{
    text-align: left;
    list-style: none;
}
#shopping li:hover{
    
}
#shopping input,button{
    padding: 5px;
    border-style: none;
    border-radius: 5px;
}
#shopping button{
    justify-self: right;
}
#shopping input[type=text]{
    width: 70%;
    margin-right: 5px;
}
#shopping input[type=text]:focus{
        box-shadow: inset 0px 0px 15px greenyellow;
    }
#shopping .controls{
    margin: 5px;
}

/* toggled classes */
.hide{
    display: none;
}
.imp{
    color:red;
    font-weight: bold;
}
.done{
    text-decoration: line-through;
    color: gray;
}
</style>