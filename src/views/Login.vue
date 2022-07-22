<template>
  <div class="main">
    <div class="card" v-if="status != 'loggedIn'">
      <h1 class="card_title" v-if="mode == 'login'"> Connexion</h1>
      <h1 class="card_title" v-else> Inscription</h1>
      <p class="card_subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="switchToCreateAccount()">Créer un compte</span></p>
      <p class="card_subtitle" v-else> Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p>
      <div class="form-row" v-if="mode == 'create'">
        <input v-model="email" class="form-row__input" type="text" placeholder="Adresse Mail">
      </div>
      <div class="form-row">
        <input v-model="username" class="form-row__input" type="text" placeholder="Login">
      </div>
      <div class="form-row">
        <input v-model="password" class="form-row__input" v-on:keyup.enter="login()" type="password" placeholder="Mot de passe" v-if="mode == 'login'">
        <input v-model="password" class="form-row__input" v-on:keyup.enter="createAccount()" type="password" placeholder="Mot de passe" v-else>
      </div>
      <div class="form-row">
        <p class="error" v-if="mode == 'login' && status == 'error_login'">
          login ou mot de passe incorrect
        </p>
        <p class="error" v-if="mode == 'create' && status == 'error_register'">
          Erreur lors de la création du compte
        </p>
      </div>
      <div class="form-row">
        <button @click="login()" class="button" :class="{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
          <span v-if="status == 'loading'">Connexion en cours...</span>
          <span v-else>Connexion</span>
        </button>
        
        <button @click="createAccount()" class="button" :class="{'button--disabled' : !validatedFields}" v-else>
          <span v-if="status == 'loading'">Création en cours...</span>
          <span v-else>Crée mon compte</span>
        </button>
      </div>
    </div>
    <div class="card" v-else>
      <p>Vous êtes déja connecté ! <span class="card__action" @click="switchToLogout()">déconnexion ?</span></p>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import { mapState } from 'vuex'

export default {
  name: 'Login',
  data: function () {
    return {
      mode: 'login',
      email: '',
      username: '',
      password: '',
    }
  },

  computed: {
    validatedFields: function () {
      if (this.mode == 'create') {
        if (this.email != "" && this.username != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      } else {
        if (this.username != "" && this.password != "") {
          return true;
        } else {
          return false;
        }
      }
    },
    ...mapState(['status'])
  },

  methods: {
    switchToCreateAccount: function () {
      this.mode = 'create';
    },
    switchToLogin: function () {
      this.mode = 'login';
    },
    login: function () {
      const self = this;
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
      }).then(function () {
        self.$router.push('/Account') // create endpoint
      }), function (error) {
        console.log(error);
      }
    },
    createAccount: function () {
      const self = this;
      this.$store.dispatch('createAccount', {
        email: this.email,
        username: this.username,
        password: this.password,
      }).then(function () {
        self.$router.push('/Account')
        self.login();
      }), function (error) {
        console.log(error);
      }
    },
    switchToLogout: function () {
      this.$router.push('/Account')
    },
  }
}
</script>

<style scoped>
.form-row {
  display: flex;
  margin: 16px 0px;
  gap: 16px;
  flex-wrap: wrap;
}

.form-row__input {
  padding: 8px;
  border: none;
  border-radius: 8px;
  background: #f2f2f2;
  font-weight: 500;
  font-size: 16px;
  flex: 1;
  min-width: 100px;
  color: black;
}

.form-row__input::placeholder {
  color: #aaaaaa;
}

.error {
  color: #FF7F7F ;
}

</style>>