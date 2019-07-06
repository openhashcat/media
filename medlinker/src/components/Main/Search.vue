<template>
    <b-input-group :prepend="label" class="mt-3">
        <b-form-input v-model="searchstr" placeholder="0XX...XX"></b-form-input>
        <b-input-group-append>
            <b-button variant="info" v-on:click="$emit('search',searchstr)">{{ search }}</b-button>
        </b-input-group-append>
    </b-input-group>
</template>

<script>
export default {
    name: "Search",
    props: ['placeholder', 'search'],
    data () {
        return {
            searchstr: "",
        }
    },
    computed: {
        label() {
            return '请输入' + this.placeholder + "：";
        }
    }
}
</script>
