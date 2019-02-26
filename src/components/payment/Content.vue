<template>
  <div class="background">
    <div class="content">
      <div class="container">
        <div class="movie">
          <MovieCard :movie="movie"/>
          <h1>{{movie.title}}</h1>
        </div>
        <div>
          <div class="box">
            <h2>Wiput Cinema</h2>
            <span>{{today}}</span>
            <h5>SELECTED SEAT</h5>
            <div class="list">
              <span v-for="seat in seatSelected" :key="seat">{{seat}}</span>
            </div>
            <h5>TICKET PRICE</h5>
            <div class="ticket-price-wrapper">Adult :
              <Select
                autosize
                type="object"
                :datas="adultPax"
                v-model="adultModel"
                @change="onAdultChange"
              ></Select>&nbsp;&nbsp;Pax. (150 Baht)
            </div>
            <div class="ticket-price-wrapper">Child :
              <Select
                autosize
                type="object"
                :datas="childPax"
                v-model="childModel"
                @change="onChildChange"
              ></Select>&nbsp;&nbsp;Pax. (100 Baht)
            </div>
            <div class="ticket-price-wrapper price-total">Total : {{total}} Baht</div>
          </div>
          <div class="ticket-action">
            <router-link :to="`/finish/${$route.params.id}`" class="purchase-button">Purchase</router-link>
          </div>
        </div>
        <div class="payment-method">
          <div
            class="payment-method-box"
            v-bind:class="{methodSelect: method === 'credit'}"
            @click="changeMethod('credit')"
          >CREDIT CARD</div>
          <div
            class="payment-method-box"
            v-bind:class="{methodSelect: method === 'promptpay'}"
            @click="changeMethod('promptpay')"
          >PROMPTPAY</div>
          <div
            class="payment-method-box"
            v-bind:class="{methodSelect: method === 'cash'}"
            @click="changeMethod('cash')"
          >CASH</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  width: 100%;
  background: linear-gradient(
    to right,
    #2e8bce,
    #3593d4,
    #3b9adb,
    #42a2e1,
    #49aae7,
    #48a1de,
    #4798d5,
    #468fcc,
    #3e74b1,
    #375a96,
    #2f427a,
    #272a5f
  );
}

.content {
  width: 100%;
  background: rgba(34, 34, 34, 0.4);
}

.container {
  width: 80vw;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.movie {
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: -1em;
  }
}

/* Payment */
.box {
  width: 300px;
  background-color: #393939;
  border-radius: 7px;
  padding: 25px;
  color: #fff;

  span {
    color: #aaa;
  }

  h5 {
    margin-top: 1em;
  }
}

.list {
  display: flex;
  flex-wrap: wrap;

  span {
    margin: 0.5em;
  }
}

.ticket-price-wrapper {
  margin-top: 1em;
}

.price-total {
  font-size: 2em;
  font-weight: bold;
}

.ticket-action {
  display: flex;
  justify-content: center;
}

.purchase-button {
  margin-top: 1em;
  background-color: #30b736;
  padding: 1em 3em;
  color: #fff;
  border-radius: 25px;
}

/* Payment Method */

.payment-method {
  display: flex;
  flex-direction: column;
}

.payment-method-box {
  cursor: pointer;

  margin-left: 1em;
  margin-top: 1em;
  width: 250px;
  padding: 1em;

  background-color: #393939;
  border: #6f6f6f 4px solid;
  border-radius: 6px;
  text-align: center;

  font-size: 1.5em;
}

.methodSelect {
  border: #4096d8 4px solid;
}
</style>

<script>
import dayjs from 'dayjs'

import store from '@/store'
import MovieCard from '@/components/common/MovieCard.vue'

export default {
  name: 'payment',
  data () {
    return {
      adult: 0,
      child: 0,
      adultModel: {},
      childModel: {},
      method: 'credit'
    }
  },
  computed: {
    movie () { return this.$store.state.movie.data },
    today () { return dayjs().format('DD MMMM YYYY') },
    seatSelected () { return this.$store.state.seatSelected },
    adultPax () {
      let result

      if (this.adult === 0 && this.child === 0) {
        result = [...Array(this.seatSelected.length + 1).keys()]
      } else {
        result = [...Array(this.seatSelected.length - this.child + 1).keys()]
      }

      result = result.map(r => ({ key: r, title: `${r} Pax` }))

      return result
    },
    childPax () {
      let result

      if (this.adult === 0 && this.child === 0) {
        result = [...Array(this.seatSelected.length + 1).keys()]
      } else {
        result = [...Array(this.seatSelected.length - this.adult + 1).keys()]
      }

      result = result.map(r => ({ key: r, title: `${r} Pax` }))

      return result
    },
    total () {
      return this.adult * 150 + this.child * 100
    }
  },
  methods: {
    onAdultChange (data) {
      if (data) {
        this.adult = data.key
        store.dispatch('setAdultPax', data.key)
      } else {
        this.adult = 0
      }
    },
    onChildChange (data) {
      if (data) {
        this.child = data.key
        store.dispatch('setChildPax', data.key)
      } else {
        this.child = 0
      }
    },
    changeMethod (method) {
      this.method = method
    }
  },
  components: {
    MovieCard
  }
}
</script>
