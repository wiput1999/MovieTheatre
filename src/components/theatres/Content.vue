<template>
  <div class="background">
    <div class="content">
      <div class="container">
        <Search/>
        <div class="row">
          <div
            v-for="d in dateList"
            :key="d.date"
            v-bind:class="{active: today.format('MMM DD') === d.date}"
            @click="changeDay(d.time)"
          >
            <div class="date">{{d.date}}</div>
            <div class="day">{{d.day}}</div>
          </div>
        </div>
        <div v-for="showtime in showtimes" :key="showtime.id">
          <h1 class="theatre-title">{{showtime.title}}</h1>
          <Showtime :showtime="s" :theatre="showtime" v-for="s in showtime.showtimes" :key="s.id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'

import Search from '@/components/common/Search.vue'
import Showtime from '@/components/theatre/Showtime.vue'

export default {
  data: function () {
    return {
      today: dayjs()
    }
  },
  methods: {
    changeDay (day) {
      this.today = day
    }
  },
  computed: {
    ...mapState({
      getSearchMovie: (state) => state.search.movie,
      allShowtimes: state => state.allShowtimes
    }),
    dateList () {
      let dateList = []
      for (let i = -1; i < 6; i++) {
        dateList.push({ date: this.today.add(i, 'day').format('MMM DD'), day: this.today.add(i, 'day').format('ddd').toUpperCase(), time: this.today.add(i, 'day') })
      }
      return dateList
    },
    showtimes () {
      let showtimes = this.allShowtimes

      if (this.getSearchMovie) {
        showtimes = showtimes.map(s => {
          return { showtimes: s.showtimes.filter(x => x.movie.id === this.getSearchMovie), id: s.id, title: s.title }
        })
      }

      return showtimes
    },
    theatre () {
      return this.$store.state.theatre
    }

  },
  components: {
    Search,
    Showtime
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

@supports (
  (-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))
) {
  .content {
    background: rgba(0, 0, 0, 0.5);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
}

.row {
  display: flex;
  justify-content: center;
  margin-top: 3em;
  margin-bottom: 4em;
  width: 100%;
  text-align: center;

  div {
    margin: 0 1em;
  }
}

.date {
  cursor: pointer;
  color: rgb(216, 216, 216);
  font-size: 1.2em;
}

.day {
  cursor: pointer;
  color: rgb(216, 216, 216);
  font-size: 1.5em;
}

.active {
  div {
    color: #fff;
  }

  border-bottom: #fff solid 2px;
}

.button {
  background-color: #fff;
  padding: 1em 3em;
  color: #000;
  border-radius: 25px;
}

.theatre-title {
  font-size: 3em;
  text-align: center;
  margin-bottom: 1em;
}
</style>
