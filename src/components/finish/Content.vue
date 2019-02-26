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
            <div class="ticket-price-wrapper">Adult : {{adult}} Pax. (150 Baht)</div>
            <div class="ticket-price-wrapper">Child : {{child}} Pax. (100 Baht)</div>
            <div class="ticket-price-wrapper price-total">Total : {{total}} Baht</div>
          </div>
          <div class="ticket-action">
            <router-link to="/finish" class="finish-button">E-Mail</router-link>
            <router-link to="/finish" class="finish-button">Print</router-link>
          </div>
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
  flex: 1 1;
}

.finish-button {
  margin: 1em;
  background-color: #30b736;
  padding: 1em 3em;
  color: #fff;
  border-radius: 25px;
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
      adult: this.$store.state.seatType.adult,
      child: this.$store.state.seatType.child
    }
  },
  computed: {
    movie () { return this.$store.state.movie.data },
    today () { return dayjs().format('DD MMMM YYYY') },
    seatSelected () { return this.$store.state.seatSelected },
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
    }
  },
  components: {
    MovieCard
  }
}
</script>
