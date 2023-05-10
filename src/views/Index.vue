<template>
 <div class="main-div">
    <h1 class="text-capitalize ">Free <span class="title">Learn From  Minhaz Archive</span></h1>
    <p><span class="title">Make your life </span> Happy <v-icon start icon="mdi-emoticon-kiss-outline " color="#42d392 "></v-icon></p>
    
    <div class="d-flex justify-center  align-center flex-column flex-md-row fill-height">
   
    </div>


    <!-- Frontend category -->
    <div class="main-div">
      <v-row class="justify-center">
        <v-col  cols="12" md="3" lg="3" xl="2" sm="4" xs="6" v-for="(frontend,index) in frontends" :key="index">
          <v-card class="py-2 " rounded="pill" color="success" variant="outlined"  elevation="0" link :to="frontend.url">
            <v-img  height="40" :src="frontend.logo"></v-img>
            <span>{{frontend.title}}</span> 
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!--End Frontend category-->

 </div>
</template>
<script>
export default {
    data() {
        return{
      
            frontends:[
                { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/350px-Webysther_20160423_-_Elephpant.svg.png?20160423214552" ,title:'PHP' },
                { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" ,title:'Larvel',url:'/laravel' },
                { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png" ,title:'Vue Js' },
                { logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png" ,title:'Nuxt Js' },
              ],
      
           
        }
    },
 

}
</script>
<style scoped>
.main-div{
    padding: 111px 32px;
    text-align: center;
}
.title{
    background: linear-gradient(to right, #42d392 ,#647eff);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    
    
}
h1{
    font-size: 60px;
    font-weight: 900;
    text-shadow: 2px 7px 5px rgb(0 0 0 / 14%);
}
p{
    max-width: 960px;
  
    color: var(--vt-c-text-2);
    transition: color .5s;
    font-size: 33px;
     font-weight: 900;
    text-shadow: 2px 7px 5px rgb(0 0 0 / 14%);
    margin: 24px auto 15px;
}


</style>
 