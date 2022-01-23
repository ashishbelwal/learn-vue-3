<template>
  <v-container>
        <h1>Volume Traker (1-20)</h1>
        <h2>Current Volume - {{volume}}</h2>
        <v-btn @click="volume += 2">Increase by 2</v-btn>
        <v-btn @click="(volume < 1) ? volume = 0 : volume -= 2">Decrease by 2</v-btn>
        <v-text-field v-model="movie">
        </v-text-field>
        <v-text-field v-model="info.title">
        </v-text-field>
        <v-text-field v-model="info.actor">
        </v-text-field>
        <div v-for="(movie, index) in movieList" :key="index + movie"> {{movie}}</div>
        <v-btn @click="movieList.push('Wonder Woman')">Add Movie</v-btn>
  </v-container>
</template>

<script>
export default {

    components : {

    },
    data : () => ({
        firstName: "",
        lastName: "",
        volume: 0,
        movie:"Batman",
        info: {
            title: " ",
            actor: " "
        },
        movieList: ['Batman', 'Matrix']
        
    }),
    computed: {

    },
    watch: {
        volume(newVol, oldVal){
            if(newVol > oldVal && newVol ===16 ){
            alert("Volume is greater than 16")
            }
        },
        movie: {
            handler(newMovie){
                console.log(newMovie)
            },
            immediate: true
        },
        info: {
            handler(info){
                console.log(info.title)
            },
            deep: true
        },
        movieList: {
            handler(newValue){
                console.log(`New Movie Added : ${newValue}`)
            }
        }
    },
    methods : {

    }

}
</script>

<style>
    .underline{
        text-decoration: underline;
    }
</style>