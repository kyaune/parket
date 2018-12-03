<template>
    <div class="main">
        <div class="description">
39 видов напольных покрытий:
        </div>
        <div class="list-of-coverings">
            <ul class="heading">
                <li v-for="covering in coverings"
                :key="covering.id"
                >
                {{covering.name}}
                </li>
            
            </ul>
        </div>
        <div class="library">
            <ul>
                <li v-for="parket in parkets"
                :key="parket.id"

                >
<div class="list-item">
    <div class="list-img"> 
        <img 
        :src="parket.image">
    </div>
    <div class="list-name">
{{parket.name}}
    </div>
    <div class="list-price">
                  {{parket.price}} руб / m2
                  </div>
                </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

ul{
    list-style-type:none; 
    margin: 0;
    padding: 0; 
}
.description{
    font-size: 27px;
    font-weight: 800;
}
.heading li{
        cursor: pointer;
        color: blue;
        text-decoration: underline;
        text-decoration-style: dotted;
        font-size: 27px;
}
.library ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.heading{
    display: flex;
    flex-direction: row;
    list-style-type: none;  
    flex: 40px;
    justify-content: space-between;
    width: 510px;
}
.list-item{
    margin-top: 40px;
    margin-right: 40px;
    cursor: pointer;
}
.list-price{
    font-size: 16px;
    font-weight: 400;
}
.list-name{
    font-size: 16px;
    font-weight: 800;
}
img {
    width: 233px;
    height: 233px;
}

</style>
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
 <script>

export default {
    data() {
        return {
            parkets: [
                {
                    name: "Перго",
                    image: 'pergo.jpg',
                    price: "420"
                },
                {
                     name: "Аберхоф",
                    image: 'aberchof.jpg',
                    price: "530"
                },
                {
                     name: "Квик степ",
                    image: 'quick_step.jpg',
                    price: "380"
                },
                {
                     name: "Таркетт",
                    image: 'tarkett.jpg',
                    price: "610"
                },
                {
                     name: "Мейстер",
                    image: 'meister.jpg',
                    price: "390"
                },
                {
                     name: "Аллер",
                    image: 'aller.jpg',
                    price: "470"
                }
            
            ],
            coverings: [
                  {
                      name: "паркет,",
                      id: 1
                  },
                  {
                      name: "ламинат,",
                      id: 2
                  },
                  {
                      name: "плитка,",
                      id: 3
                  },
                  {
                      name: "ковролин",
                      id: 4
                  }
            ]
        };
        
    }
};
</script>

