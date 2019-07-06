<template>
    <div>
        <b-row>
            <b-col cols="12" offset="0" md="8" offset-md="2">
                <Search placeholder="文章ID" searchlabel="查找" v-on:search="getData($event)" v-on:keyup.enter="getData($event)"></Search>
            </b-col>
        </b-row>
        <hr />
        
        <b-row>
            <b-col cols="12" offset="0" md="8" offset-md="2">
                <Tablist :posts="data"></Tablist>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Search from './Main/Search.vue';
import Tablist from './Main/Tablist.vue';
import MedLinker from './Main/utils/index.js';
import abi from './Main/utils/abi.js';

export default {
    name: 'Main',
    components: {
        Search,
        Tablist,
    },
    data() {
        return {
            data: [],
            ids:[],
        }
    },
    methods:{
        async getData(id){
            // eslint-disable-next-line
            console.log(id);
            if(this.ids.includes(id)){
                return ;
            }
            let med = new MedLinker( abi ,'0x391e627b6251724469ef8e51b7e21071573564b3');
            let r = await med.get(id);
            for (let i = 0; i != this.data.length; i ++) {
                this.data[i].visible = false;
            }
            r.visible=true;
            this.data.push(r);
            this.ids.push(id);
            // eslint-disable-next-line
            console.log(this.data);
        }
    }
}
</script>
