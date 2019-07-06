<template>
    <div role="tablist">
        <Card v-for="post in posts" :key="post.id" v-bind="post"></Card>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    name: "Tablist",
    props: ['posts'],
    components: {
        Card,
    }
}
</script>
