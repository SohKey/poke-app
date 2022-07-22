<!-- eslint-disable  --> 

<template>
    <div class="main">
        <section>
            <div class="container">
                <div class="welcome">
                    <h1>Bienvenue sur l'appli web de pokemons !</h1>
                    <p>ici, créer votre pokedex, ajoutez des pokemons ou éditez les.</p>
                </div>
                <div class="items-image">
                    <img src="../assets/cover.jpg" alt="">
                    <img src="../assets/cover.jpg" alt="">
                </div>
                <div class="items-image">
                    <img src="../assets/cover.jpg" alt="">
                    <img src="../assets/cover.jpg" alt="">
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

section {
    margin-top: 6vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    height: auto;
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

.items-image img {
    max-width: 50%;
	height: auto;
    margin: 10px;
    border: 2px #000000 solid;
    box-shadow: 0px 0px 10px -2px #000000;
}

.items-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    height: auto;
} 

@media only screen and (max-width: 1150px) {
    section {
        max-width: 70%;
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
    .container {
        height: auto;
        width: 90%;
    }
}

@media only screen and (max-width: 820px) {
    .container {
        height: auto;
        width: 80%;
    }
}

@media only screen and (max-width: 600px) {
    section {
        min-height: 170%;
    }
    .container {
        max-height: fit-content;
        width: 90%;
    }

}

</style>