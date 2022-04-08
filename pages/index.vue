<template>
<div>
  <Header/>
  <!-- <h2>Home Page</h2> -->
  <div class ="hero">

    <img src="~/static/Todo.png" alt="">

    </div>
</div>


</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: { Header },
  name: 'IndexPage',
}
</script>
><style scoped>
img{
  width: 100%;
  height: 100%;

}
.hero{
  width: 100%;
  height: 100%;
  /* background-color: #713094; */
  display: flex;
  /* justify-content: center;
  align-items: center; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  position: absolute;


  /* top: 50%;
  left: 50%; */
}

</style>
