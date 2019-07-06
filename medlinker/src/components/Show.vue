<template>
    <b-container fluid>
        <Header name="MedLinker" content="Copyright preservation, article publishing, data management."> </header>
        <Main></Main>
        <Footer name="Hashcat"></Footer>
    </b-container>
</template>

<script>
import Header from './Show/Header.vue';
import Footer from './Show/Footer.vue';
import Main from './Show/Main.vue';

export default {
    name: 'Show',
    components: { 
        Header,
        Footer,
        Main,
    }
}
</script>

