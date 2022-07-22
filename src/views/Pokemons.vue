<!-- eslint-disable  --> 
<template>
    <div class="main">
        <section>
            <div class="container">
                <div class="welcome">
                    <h1>La collection complète</h1>
                    <p>Informations concernant les pokemons</p>
                </div>
                <div class="pokemons-container">
                    <div class="pokemons">
                        <div class="pokemon" v-for="pokemon in pokemons">
                            <span v-if="pokemon.id >= 0">
                                <div class="card-info">
                                    <span class="hp">{{ pokemon.hp }} hp</span>
                                    <span class="cp">{{ pokemon.cp }} cp</span>
                                </div>
                                <div class="card-text">
                                    <span v-for="Type in pokemon.types"> {{ Type }}</span>
                                </div>
                                <p v-text="pokemon.name"></p>
                                <img :src="pokemon.picture" alt="">
                            </span>
                        </div>
                    </div>
                    <div class="pokemon-button">
                        <button class="button--disabled" @click="previouspage()" v-if="ispageone()">Précédent</button>
                        <button @click="previouspage()" v-else>Précédent</button>
                        <button class="button--disabled" @click="nextpage(true)" v-if="islastpage(allpokemons.length)">Suivant</button>
                        <button @click="nextpage(false)" v-else>Suivant</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
/* eslint-disable*/
import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://192.168.1.149:3000/api'
})
let min_id = 0

export default {
    data: () => {
        return {
            pokemons: '',
            allpokemons: '',
        }
    },
    async created() {
            this.pokemons = (await instance.get(`/Pokemons?limit=10&min_id=${min_id}`)).data.data
            this.allpokemons = (await instance.get(`/Pokemons`)).data.data
    },
    methods: {
        nextpage: async function (bool) {
            if(bool == false){
                min_id += 11
                this.pokemons = (await instance.get(`/Pokemons?limit=10&min_id=${min_id}`)).data.data
            }
        },
        previouspage: async function () {
            if(min_id != 0){
                min_id = min_id - 11
                this.pokemons = (await instance.get(`/Pokemons?limit=10&min_id=${min_id}`)).data.data
            }
        },
        ispageone: function () {
            if(min_id == 0) return true
        },
        islastpage: function (len) {
            if(min_id + 11 > len) return true
        }
    }

}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    min-height: 100%;
    background-color: aliceblue;
    box-shadow: 0px 0px 20px -2px #000000;
    background-image: url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png');
    background-repeat: repeat;
    padding: 10vh;
}

.welcome {
    display: block;
    text-align: center;
    width: 100%;
    padding: 10px;
    border: 2px #000000 solid;
    border-radius: 10px;
    background-color: dimgrey;
    color: #fff;
    min-height: fit-content;
    box-shadow: 0px 0px 10px -2px #000000;
    margin-bottom: 10px;
}

.container {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
}

.pokemon {
    display: inline-block;
    margin: 5px;
    background-color: #fff;
    border: 2px #000000 solid;
    color: dimgrey;
    font-weight: bold;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
    transition: 0.2s ease;
    height: fit-content;
}

@media only screen and (max-width: 1650px) {
    .pokemon{
        max-width: 18%;
        height: auto;
    }    
}

@media only screen and (max-width: 1150px) {
    section {
        max-width: 70%;
    } 
    .pokemon {
        max-width: 22%;
    }
}

@media only screen and (max-width: 1100px) {
    section {
        min-width: 100%;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } 
    .welcome {
        width: 100%;
    }
    .container {
        height: auto;
        width: 90%;
    }
    .pokemon {
        max-width: 18%;
    }
}

@media only screen and (max-width: 820px) {
    .container {
        height: auto;
        width: 80%;
    }
    .pokemon {
        max-width: 22%;
    }
}

@media only screen and (max-width: 600px) {
    section {
        min-height: 170%;
        padding-top: 30vh;
    }
    .container {
        max-height: fit-content;
        width: 90%;
    }
    .pokemon {
        max-width: 22%;
    }
}

@media only screen and (max-width: 450px) {
    .container {
        height: auto;
        width: 90%;
    }
    .pokemon {
        max-width: 25%;
    }
}

.pokemon img {
    max-width: 100%;
    height: auto;
}

.pokemons-container {
    display: flex;
    height: 90%;
    border: 2px #000 solid;
    flex-direction: column;
    background-color: beige;
    border-radius: 10px;
}

.pokemon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 8%;
}

.pokemon-button button {
    margin: 5px;
    padding: 5px 10px 5px 10px;
    background-color: #2eb7eb;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-weight: 600;
    font-size: 80%;
    cursor: pointer;
}

.pokemon-button button:hover {
    background-color: #ccc;
    transition: 0.2s;
}

.button--disabled {
  background: #cecece;
  color: #ececec
}

.button--disabled:hover {
  cursor: not-allowed;
  background: #cecece;
}
.pokemons {
    display: flex;
    width: fit-content;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 35em;
}

.pokemon:hover {
    transform: scale(1.04);
}

.pokemon:hover img {
    transform: scale(1.08);
    filter: blur(1px);
}

.pokemon:hover .card-text {
    opacity: 1;
    right: -35%;
    z-index: 10;
}

.pokemon:hover .card-info {
    opacity: 1;
    left: -10%;
    z-index: 10;
}

.pokemon .card-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.8rem;
    position: absolute;
    right: -60%;
    opacity: 0;
    transition: 0.6s;
    width: 100%;
    height: 75px;
    background: transparent;
    margin-top: 30px;
}

.pokemon .card-text span {
    z-index: 10;
    background: #2eb7eb;
    font-weight: 300;
    border: 1px #000000 solid;
    padding: 4px 6px;
    color: white;
    border-radius: 4px;
    margin: 5px;
    width: 50%;
    text-align: left;
}

.pokemon .card-info {
    display: flex;
    flex-direction: column;
    padding: 0.3rem 0.8rem;
    position: absolute;
    left: -40%;
    opacity: 0;
    transition: 0.6s;
    width: fit-content;
    height: 75px;
    background: transparent;
}

.pokemon .card-info .hp {
    z-index: 10;
    text-align: end;
    background: forestgreen;
    font-weight: 300;
    padding: 2px 5px;
    color: white;
    border-radius: 4px;
    margin: 5px;
    border: 1px #000000 solid;
}

.pokemon .card-info .cp {
    z-index: 10;
    text-align: end;
    background: crimson;
    font-weight: 300;
    padding: 2px 5px;
    color: white;
    border-radius: 4px;
    margin: 5px;
    border: 1px #000000 solid;

}
</style>