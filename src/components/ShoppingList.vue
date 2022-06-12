<template>
<section id="shopping">
    <h1>{{compName}}</h1>
    <form v-show="showAddForm" @submit.prevent="">
        <h5>Start adding new items</h5>
        <input @keyup.enter="saveNew" type="text" name="" id="" placeholder="Type here to add a new item" v-model.trim="newItem">
        <label for="itemPriority" class="grab">
        <input v-model="priority" type="checkbox" id="itemPriority">
        High Priority!
        </label>
    </form>
        <div class="controls">
        <button @click="saveNew" type="button" :disabled="newItem.length <3 ">
            Save Item
            </button>
        <button @click="toggleSortByP" type="button" :disabled="priorityFirst.length==0"
        :class="{pSorted:sortByP}">
            Sort by Priority
            </button>
        </div>
    <p v-if="items.length===0">Your Shopping list is Empty..</p>
    <ul v-show="!sortByP" v-for="item in items" :key="item.id">
        <li :class="{imp:item.priority,done:item.done}" 
        @click="toggleDone(item)">
        {{items.indexOf(item)+1}}- {{item.value}}
        </li>
    </ul>
    <ul v-show="sortByP" v-for="item in priorityFirst" :key="item.id">
        <li :class="{imp:item.priority,done:item.done}" 
        @click="toggleDone(item)">
        {{priorityFirst.indexOf(item)+1}}- {{item.value}}
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
        done: false,
        sortByP: false,
        showAddForm: true
    }
},
methods: {
    saveNew(){
        if(this.newItem!='' && this.newItem.length>=3) this.items.push({id:this.items.length+1, value: this.newItem, priority: this.priority, done:this.done})
        this.newItem=''
        this.priority=false
    },
    toggleForm(e){
        if(window.scrollY>100) this.showAddForm=!this.showAddForm
        //this.showAddForm=!this.showAddForm
    },
    toggleDone(item){
        item.done=!item.done
    },
    toggleSortByP(){
        this.sortByP=!this.sortByP
    }
},
computed:{
    priorityFirst(){
        let imp = this.items.filter(item => item.priority==true && item.done==false)
        let norm = this.items.filter(item => item.priority==false && item.done==false)
        let done = this.items.filter(item => item.done==true)
        //let pF=imp.push(...norm) 
        return imp.concat(norm,done)
    },
    // itemDynamicID(arr,item){
    //     return arr.indexOf(item)
    // }

},
created(){
    window.addEventListener("scroll", this.toggleForm)
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
    list-style: none;
    text-align: left;
    /* counter-reset: list; */
}
#shopping li{
/*     counter-increment:list;
 */    position:relative;
}
/* #shopping li:before{
    content: counter(list);margin-right: 5px;
    position: absolute;
    right: 100%;
} */
#shopping li:hover{
    background-color: rgba(172, 255, 47, 0.259);
    cursor: grab;
}
#shopping input,button{
    padding: 5px;
    border-style: none;
    border-radius: 5px;
}
#shopping button{
    margin: 5px;
}
#shopping button:disabled{
    cursor: not-allowed;
}
#shopping input[type=text]{
    width: 70%;
    margin-right: 5px;
   /*  text-align: center; */
}
#shopping input[type=text]:focus,#shopping .pSorted, #shopping div.controls button:enabled:hover{
        box-shadow: inset 0px 0px 15px greenyellow;
    }
#shopping .controls{
    margin: 5px;
}
#shopping .grab{
    cursor: grab;
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