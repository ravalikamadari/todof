<template>
  <div>
       <header>
        <figure class="brand"><nuxt-link to="/">TodoApp</nuxt-link></figure>
        <nav class="menu">
            <input type="checkbox" id="menuToggle">
            <label for="menuToggle" class="menu-icon"><i class="fa fa-bars"></i></label>
            <ul>
                <nuxt-link to="/"><li>Home</li></nuxt-link>
                <nuxt-link to="/login"><li>Login</li></nuxt-link>

                <!-- <nuxt-link to="/userRegister"><li>SignUp</li></nuxt-link> -->

            </ul>
        </nav>
    </header>
  </div>
</template>

<script>
export default {
name: 'Header',
}
</script>

<style scoped>
/*Configurações Globais*/
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
}
li {
    list-style: none;
}
/*Início das configurações da header*/
header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-family: sans-serif;
    background-color: #836394;
}
.brand {
    width: auto;
    height: 100%;
    float: left;
    margin: 0 0 0 5%;
}
/*Início das configurações da Navigation*/
.menu {
    width: 60%;
    height: 100%;
    float: right;
}
.menu ul {
    width: 100%;
    height: inherit;
    margin: 0;
    padding: 0;
    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
}
.menu ul a {
    width: 20%;
    height: inherit;
    color: #222;
    display: inline-block;
}
.menu ul a:hover {
    background-color: #222;
    color: #fff;
}
#menuToggle {
    display: none;
}
.menu-icon {
    display: none;
}
/*Início das configurações da Navigation com dispositivos < 768px*/
@media screen and (max-width: 768px) {
    .menu {
        width: 100%;
        height: auto;
    }
    .menu ul {
        display: block;
        max-height: 0;
    	overflow: hidden;
    	-webkit-transition: max-height 0.3s;
    	-moz-transition: max-height 0.3s;
        -ms-transition: max-height 0.3s;
        -o-transition: max-height 0.3s;
    	transition: max-height 0.3s;
        /*Para fazer com que o menu saia da esquerda, você deve trocar max-height por max-width*/
        /*Para fazer com que o menu saia da direita, você deve trocar max-height por max-width e setar float: right*/
    }
    .menu ul a {
        text-align: left;
        width: 100%;
        height: 50px;
        background-color: #f1c40f;
        padding: 10px 0px 10px 5%;
    }
    .menu-icon {
        width: 100px;
        height: inherit;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        line-height: 60px;
    }
    #menuToggle:checked ~ ul {
        max-height: 350px;
        /*Para fazer com que o menu saia da esquerda ou direita, você deve trocar max-height por max-width*/
    }
    .menu-icon i {
        font-size: 1.7em;
    }
}

</style>