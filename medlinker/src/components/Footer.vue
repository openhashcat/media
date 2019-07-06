<template>
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <b-row>
            <b-col cols="2"></b-col>
            <b-col>
                <small class="d-block mb-3 text-muted">powered by {{ name }}. </small>
            </b-col>
            <b-col cols="6"></b-col>
            <b-col cols="2"></b-col>
        </b-row>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: ['name']
}
</script>
