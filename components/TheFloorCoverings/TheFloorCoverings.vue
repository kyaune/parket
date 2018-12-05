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
                >
                {{coveringName.name}}
                </li>
            
            </ul>
        </div>
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
                    image: require('~/static/parket/pergo.jpg'),
                    price: "420"
                },
                {
                     name: "11",
                    image: require('~/static/parket/aberchof.jpg'),
                    price: "530"
                },
                {
                     name: "11 степ",
                    image: require('~/static/parket/quick_step.jpg'),
                    price: "380"
                },
                {
                     name: "11",
                    image: require('~/static/parket/tarkett.jpg'),
                    price: "610"
                },
                {
                     name: "11",
                    image: require('~/static/parket/meister.jpg'),
                    price: "390"
                },
                {
                     name: "11",
                    image: require('~/static/parket/aller.jpg'),
                    price: "470"
                }
            
            ], 
                      plitka: [
                {
                    name: "22",
                    image: require('~/static/parket/pergo.jpg'),
                    price: "420"
                },
                {
                     name: "22",
                    image: require('~/static/parket/aberchof.jpg'),
                    price: "530"
                },
                {
                     name: "22 степ",
                    image: require('~/static/parket/quick_step.jpg'),
                    price: "380"
                },
                {
                     name: "33",
                    image: require('~/static/parket/tarkett.jpg'),
                    price: "610"
                },
                {
                     name: "33",
                    image: require('~/static/parket/meister.jpg'),
                    price: "390"
                },
                {
                     name: "33",
                    image: require('~/static/parket/aller.jpg'),
                    price: "470"
                }
            
            ],
                      kovrolin: [
                {
                    name: "44",
                    image: require('~/static/parket/pergo.jpg'),
                    price: "420"
                },
                {
                     name: "44",
                    image: require('~/static/parket/aberchof.jpg'),
                    price: "530"
                },
                {
                     name: "44 степ",
                    image: require('~/static/parket/quick_step.jpg'),
                    price: "380"
                },
                {
                     name: "44",
                    image: require('~/static/parket/tarkett.jpg'),
                    price: "610"
                },
                {
                     name: "44",
                    image: require('~/static/parket/meister.jpg'),
                    price: "390"
                },
                {
                     name: "44",
                    image: require('~/static/parket/aller.jpg'),
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

