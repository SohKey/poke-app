<!-- eslint-disable  --> 
<template>
    <div class="main">
        <section>
            <div class="container">
                <div class="welcome">
                    <h1>Mon compte</h1>
                    <p>Informations personnelles</p>
                </div>
                <div class="card_infos">
                    <p>nom d'utilisateur: {{user.username}}</p>
                    <p>email: {{user.email}}</p>
                </div>
                <div class="form-row">
                    <button @click="logout()" class="button" >
                      <span v-if="status == 'loading'">Déconnexion en cours...</span>
                      <span v-else>Déconnexion</span>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://192.168.1.149:3000/api'
})

export default {
    name: 'Account',
    data: () => {
        return {
            user: '',
        }
    },
    async created() {
        const id = this.$store.state.user.id
        const token = this.$store.state.user.token
        const url = `/account/${id}`
        if(id !== -1){
            this.user = (await instance.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data.data
        }
    },
    mounted: function () {
        if (this.$store.state.user.id == -1) {
            this.$router.push('/Login');
            return;
        }
        this.$store.dispatch('getUserInfos');
    },
    methods: {
        logout: function () {
            this.$store.commit('logout');
            this.$store.state.status = 'logout'
            this.$router.push('/Login');
        }
    },
}
</script>

<style scoped>

section {
    margin-top: 6vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    height: 80%;
    background-color: aliceblue;
    box-shadow: 0px 0px 20px -2px #000000;
    background-image: url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png');
    border-radius: 10px;
    padding: 10px;
}

.welcome{
    display: block;
    text-align: center;
    padding: 10px;
    border: 2px #000000 solid;
    border-radius: 10px;
    background-color: dimgrey;
    color: #fff;
    height: fit-content;
    box-shadow: 0px 0px 10px -2px #000000;
}

.container {
    width: 100%;
    height: 100%;
    padding: 20px;
}

.card_infos {
    display: flex;
    height: 75%;
    flex-direction: column;
    border: 2px #000000 solid;
    border-radius: 10px;
    background-color: beige;
    padding: 10px;
    margin-top: 10px;
    box-shadow: 0px 0px 10px -2px #000000;

}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-row {
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-row button {
    margin-top: 10px;
    width: 30%;
}

@media only screen and (max-width: 1150px) {
    section {
        max-width: 70%;
    } 
}

@media only screen and (max-width: 1100px) {
    section {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } 
    .container {
        height: auto;
        width: 90%;
    }
}

@media only screen and (max-width: 820px) {
    .container {
        height: auto;
        width: 100%;
    }

    section {
        width: 90%;
        min-height: fit-content;
    }
}

@media only screen and (max-width: 600px) {
    section {
        min-height: 170%;
        min-width: 100%;
    }
    .container {
        max-height: fit-content;
        width: 90%;
    }

    .button {
        min-width: fit-content;
    }

}
</style>