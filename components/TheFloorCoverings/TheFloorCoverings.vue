<template>
    <div class="main">
        <div class="description">
39 видов напольных покрытий:
        </div>
        <div class="list-of-coverings">
            <ul class="heading">
                <li v-for="coveringName in coveringNames"
                :key="coveringName.id"
                @click="selected = coveringName.engname"
                v-bind:class="{'active' : coveringName.engname == selected}"
                >
                {{coveringName.name}}
                </li>
            
            </ul>
        </div>
        <transition name="component-fade">
        <div class="library">
            <ul>
                <li v-for="element in selectedArray"
                :key="'parket' + element.price" 
                >
                <div class="list-item">
                    <div class="list-img"> 
                        <img 
                         :src="element.image">
                    </div>
                    <div class="list-name">
                        {{element.name}}
                    </div>
                    <div class="list-price">
                         {{element.price}} руб / m2
                     </div>
                </div>

                </li>
            </ul>
        </div>
        </transition>
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
        color: rgb(14, 14, 236);
        font-size: 27px;
}
.heading li:hover{
        cursor: pointer;
        color: rgb(14, 14, 236, 0.7);
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: all .5s ease;
  opacity: 1;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
.active{
    text-decoration: underline;
    text-decoration-style: solid;
}

</style>
 <script>

export default {
    mounted () {
        console.log(this[this.selected])
    },
    data() {
        return {
            selected: 'parket',
            coveringNames : [
                {
                name: 'паркет',
                engname: 'parket',
                id: 0
                },
                {
                name: 'ламинат',
                engname: 'laminat',
                id: 1
                },
                {
                name: 'плитка',
                engname: 'plitka',
                id: 2
                },
                {
                name: 'ковролин',
                engname: 'kovrolin',
                id: 3
                },
            ],
        
            
            coverings: {
                      parket: [
                {  
                    name: "Перго",
                    image: require('~/static/parket/pergo.jpg'),
                    price: "420"
                },
                {
                     name: "Аберхоф",
                    image: require('~/static/parket/aberchof.jpg'),
                    price: "530"
                },
                {
                     name: "Квик степ",
                    image: require('~/static/parket/quick_step.jpg'),
                    price: "380"
                },
                {
                     name: "Таркетт",
                    image: require('~/static/parket/tarkett.jpg'),
                    price: "610"
                },
                {
                     name: "Мейстер",
                    image: require('~/static/parket/meister.jpg'),
                    price: "390"
                },
                {
                     name: "Аллер",
                    image: require('~/static/parket/aller.jpg'),
                    price: "470"
                }
            
            ],
                      laminat: [
                {
                    name: "11",
                    image: require('~/static/laminat/laminat1.jpg'),
                    price: "420"
                },
                {
                     name: "11",
                    image: require('~/static/laminat/laminat2.jpg'),
                    price: "530"
                },
                {
                     name: "11 степ",
                    image: require('~/static/laminat/laminat3.jpg'),
                    price: "380"
                },
                {
                     name: "11",
                    image: require('~/static/laminat/laminat4.jpg'),
                    price: "610"
                },
                {
                     name: "11",
                    image: require('~/static/laminat/laminat5.jpg'),
                    price: "390"
                },
                {
                     name: "11",
                    image: require('~/static/laminat/laminat6.jpg'),
                    price: "470"
                }
            
            ], 
                      plitka: [
                {
                    name: "22",
                    image: require('~/static/plitka/plitka1.jpg'),
                    price: "420"
                },
                {
                     name: "22",
                    image: require('~/static/plitka/plitka2.jpg'),
                    price: "530"
                },
                {
                     name: "22 степ",
                    image: require('~/static/plitka/plitka3.jpg'),
                    price: "380"
                },
                {
                     name: "33",
                    image: require('~/static/plitka/plitka4.jpg'),
                    price: "610"
                },
                {
                     name: "33",
                    image: require('~/static/plitka/plitka5.jpeg'),
                    price: "390"
                },
                {
                     name: "33",
                    image: require('~/static/plitka/plitka6.jpg'),
                    price: "470"
                }
            
            ],
                      kovrolin: [
                {
                    name: "44",
                    image: require('~/static/kovrolin/kovrolin1.jpg'),
                    price: "420"
                },
                {
                     name: "44",
                    image: require('~/static/kovrolin/kovrolin2.jpg'),
                    price: "530"
                },
                {
                     name: "44 степ",
                    image: require('~/static/kovrolin/kovrolin3.jpg'),
                    price: "380"
                },
                {
                     name: "44",
                    image: require('~/static/kovrolin/kovrolin4.jpg'),
                    price: "610"
                },
                {
                     name: "44",
                    image: require('~/static/kovrolin/kovrolin5.jpg'),
                    price: "390"
                },
                {
                     name: "44",
                    image: require('~/static/kovrolin/kovrolin6.jpg'),
                    price: "470"
                }
            
            ],
        }
            // arrays: {
            //     laminat: [],
            //     parket: []
            // }
        };
        
    },
    computed: {
        selectedArray () {
            console.log(this.selected);
            return this.coverings[this.selected];
        }
    }
};
</script>

