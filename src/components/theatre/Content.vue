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
          >
            <div class="date">{{d.date}}</div>
            <div class="day">{{d.day}}</div>
          </div>
        </div>
        <Showtime :showtime="showtime" v-for="showtime in showtimes" :key="showtime.id"/>
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
  beforeMount () {
  },
  computed: {
    ...mapState({
      getSearchMovie: (state) => state.search.movie
    }),
    dateList () {
      let dateList = []
      for (let i = -1; i < 6; i++) {
        dateList.push({ date: this.today.add(i, 'day').format('MMM DD'), day: this.today.add(i, 'day').format('ddd').toUpperCase() })
      }
      return dateList
    },
    showtimes () {
      let showtimes = this.$store.state.showtimes
      if (this.getSearchMovie) {
        return showtimes.filter(x => x.movie.id === this.getSearchMovie)
      }
      return showtimes
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
  background-image: url("/assets/home/background.jpg");
  background-size: cover;
  background-position: center;
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

.button {
  background-color: #fff;
  padding: 1em 3em;
  color: #000;
  border-radius: 25px;
}
</style>
