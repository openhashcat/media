<template>
    <b-row>
        <b-col>
            <header>
                <div>
                    <b-jumbotron bg-variant="info" text-variant="white">
                        <template slot="header">
                            <h2>
                                {{ name }}
                            </h2>
                        </template>

                        <template slot="lead">
                            {{ content }}
                        </template>
                    </b-jumbotron>
                </div>
            </header>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'Header',
    props: ['name' ,'content']
}
</script>
