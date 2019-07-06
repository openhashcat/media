<template>
    <b-input-group :prepend="label" class="mt-3">
        <b-form-input v-model="searchstr" :state="inputstate" placeholder="0XX...XX"></b-form-input>
        <b-input-group-append>
            <b-button variant="info" v-on:click="searcher" v-on:keyup.enter="searcher">{{ searchlabel }}</b-button>
        </b-input-group-append>
    </b-input-group>
</template>

<script>
export default {
    name: "Search",
    props: ['placeholder', 'searchlabel'],
    data () {
        return {
            searchstr: "",
            inputstate: null,
        }
    },
    methods: {
        searcher() {
            let match =  /^(0x|0X)[0-9a-fA-F]{64}$/g;
            if( match.test(this.searchstr)) {
                this.$emit('search', this.searchstr);
                this.inputstate = true;
            } else {
                // eslint-disable-next-line
                console.log('match error');
                // display error
                this.inputstate = false;
            }
        }
    },
    computed: {
        label() {
            return '请输入' + this.placeholder + "：";
        }
    }
}
</script>
