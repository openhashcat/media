<template>
    <div id="app">
        <b-container fluid>
            <Header name="MedLinker" content="Copyright preservation, article publishing, data management."> </header>
            <Main></Main>
            <Footer name="Hashcat"></Footer>
        </b-container>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';

export default {
    name: 'app',
    components: { 
        Header,
        Footer,
        Main,
    }
}
</script>

<style>
#app {

}
</style>
