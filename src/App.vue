<template>
  <header>
    <nav class="bar1">
      <img src="./assets/logo.png" alt="fav">
      <router-link to="/">Accueil</router-link>
      <p>|</p>
      <router-link to="/Account">Compte</router-link>
      <p>|</p>
      <router-link to="/Pokemons">Pokemons</router-link>
      <img src="./assets/bulb.jpg" alt="">
    </nav>
    <nav class="account">
      <router-link to="/Login">Login</router-link>
    </nav>
  </header>
  <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100vh;
}

body {
  background-image: url("./assets/login-back.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}

img {
  max-width: 100%;
  border-radius: 8px;
}

header {
  display: flex;
  justify-content: center;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  background-color: #666;
  height: 6%;
}

.account {
  width: 10%;
  right: 1px;
}

nav a,
nav p {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  height: 100%;
}

nav a:hover {
  color: #ccc;
  text-decoration: underline;
}

nav img {
  width: 50px;
  height: 50px;
}

.card {
  max-width: 100%;
  width: 540px;
  background: white;
  border-radius: 16px;
  padding: 32px;
}
@media only screen and (max-width: 820px) {
    .card{
        width: 80%;
    }
}

.card__title {
  text-align: center;
  font-weight: 800;
}

.card__subtitle {
  text-align: center;
  color: #666;
  font-weight: 500;
}

.button {
  background: #2196F3;
  color: white;
  border-radius: 8px;
  font-weight: 800;
  font-size: 15px;
  border: none;
  width: 100%;
  padding: 16px;
  transition: .4s background-color;
}

.card__action {
  color: #2196F3;
  text-decoration: underline;
}

.card__action:hover {
  cursor: pointer;
}

.button:hover {
  cursor: pointer;
  background: #1976D2;
}

.button--disabled {
  background: #cecece;
  color: #ececec
}

.button--disabled:hover {
  cursor: not-allowed;
  background: #cecece;
}

.display-bar {
  display: none;
}

@media only screen and (max-width: 675px) {
    nav a, nav p {
      padding-left: 2px;
      padding-right: 2px;
    }
    .account {
      display: none;
    }
}


</style>
