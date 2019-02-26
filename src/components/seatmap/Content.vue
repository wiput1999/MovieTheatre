<template>
  <div class="background">
    <div class="content">
      <div class="container">
        <div class="wrapper">
          <div>
            <MovieCard :movie="movie"/>
          </div>
          <div class="movie-detail">
            <h1>{{movie.title}}</h1>
            <div class="header">
              <div
                v-for="d in dateList"
                :key="d.date"
                v-bind:class="{active: today.format('MMM DD') === d.date}"
              >
                <div class="date">{{d.date}}</div>
                <div class="day">{{d.day}}</div>
              </div>
            </div>

            <div class="seat-wrapper">
              <div class="row">
                <div>
                  <h1 class="seat-header">Seat Map</h1>
                </div>
              </div>
              <div class="row">
                <div class="selected-seat">
                  <div v-for="seat in seatSelected" :key="seat">{{seat}}&nbsp;</div>
                </div>
              </div>
              <div class="row" v-for="r in letters.substring(0,row).split('').reverse()" :key="r">
                <div
                  class="box"
                  v-for="c in column"
                  v-bind:class="getClasses(seatSelected, seatBooked, `${r}${c}`)"
                  @click="onSeatClick(`${r}${c}`)"
                  :key="`${r}${c}`"
                ></div>
              </div>
              <div class="row" style="padding-top: 3em;">
                <router-link class="button" :to="`/payment/${movie.id}`">Next</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import dayjs from 'dayjs'

import store from '@/store'

import MovieCard from '@/components/common/MovieCard.vue'

export default {
  data: function () {
    return {
      store,
      today: dayjs(),
      row: 5,
      column: 10,
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
  },
  props: ['id'],
  computed: {
    dateList () {
      let dateList = []
      for (let i = -1; i < 2; i++) {
        dateList.push({ date: this.today.add(i, 'day').format('MMM DD'), day: this.today.add(i, 'day').format('ddd').toUpperCase() })
      }
      return dateList
    },
    movie () { return this.$store.state.movie.data },
    seatBooked () { return this.$store.state.seatBooked },
    seatSelected () { return this.$store.state.seatSelected }

  },
  methods: {
    onSeatClick (id) {
      console.log(id)
      if (this.seatSelected.includes(id)) {
        store.dispatch('doRemoveSeatSelect', id)
      } else {
        store.dispatch('doAddSeatSelect', id)
      }
    },
    getClasses: (seatSelected, seatBooked, id) => {
      let classes = []

      if (seatSelected.includes(id)) {
        classes.push('selected')
      }

      if (seatBooked.includes(id)) {
        classes.push('booked')
      }

      if (!seatSelected.includes(id) && !seatBooked.includes(id)) {
        classes.push('available')
      }

      return classes
    },
    ...mapActions({
      addSeatSelect: 'doAddSeatSelect',
      removeSeatSelect: 'doRemoveSeatSelect'
    })
  },
  components: {
    MovieCard
  }
}
</script>

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
  margin-bottom: 3em;
  background: rgba(34, 34, 34, 0.8);
}

.container {
  width: 80vw;
  margin: 0 auto;
  padding: 100px 0;
}

.header {
  display: flex;
  margin-top: 2em;
  margin-bottom: 3em;
  text-align: center;

  div {
    margin: 0 1em;
  }
}

.date {
  color: rgb(216, 216, 216);
  font-size: 1.2em;
}

.day {
  color: rgb(216, 216, 216);
  font-size: 1.5em;
}

.active {
  div {
    color: #fff;
  }

  border-bottom: #fff solid 2px;
}

.wrapper {
  display: flex;
  margin-top: 4em;
  width: 100%;
  justify-content: center;
}

.movie-detail {
  display: flex;
  flex-direction: column;
  padding-left: 2em;

  h1 {
    font-size: 2.5em;
    padding-left: 1em;
  }
}

.button {
  background-color: #fff;
  padding: 1em 3em;
  color: #000;
  border-radius: 25px;
}

.seat-wrapper {
  width: 100%;

  h1 {
    padding: 0;
  }
}

.selected-seat {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5em;
  width: 50%;

  div {
    margin: 0.5em;
  }
}

.seat-header {
  margin-bottom: 0.4em;
}

.row {
  width: 100%;
  display: flex;
  justify-content: center;
}

.booked {
  background-color: rgb(112, 112, 112);
}

.selected {
  border: rgb(255, 57, 57) 3px solid !important;
}

.available {
  cursor: pointer;
}

.box {
  width: 40px;
  height: 40px;
  margin: 5px;
  border: rgb(112, 112, 112) 3px solid;
  border-radius: 13px;
}
</style>
