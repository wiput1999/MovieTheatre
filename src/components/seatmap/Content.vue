<template>
  <div class="background">
    <div class="content">
      <div class="container">
        <Search/>
        <div class="wrapper">
          <MovieCard :movie="movie"/>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import Search from '@/components/common/Search.vue'
import MovieCard from '@/components/common/MovieCard.vue'

export default {
  data: function () {
    return {
      today: dayjs()
    }
  },
  props: ['id'],
  beforeMount () {
  },
  computed: {
    dateList () {
      let dateList = []
      for (let i = -1; i < 2; i++) {
        dateList.push({ date: this.today.add(i, 'day').format('MMM DD'), day: this.today.add(i, 'day').format('ddd').toUpperCase() })
      }
      return dateList
    },
    movie () { return this.$store.state.movie.data }

  },
  components: {
    Search,
    MovieCard
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

.header {
  display: flex;
  margin-top: 2em;
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
}

.movie-detail {
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5em;
    padding-top: 0.3em;
    padding-left: 1em;
  }
}

.button {
  background-color: #fff;
  padding: 1em 3em;
  color: #000;
  border-radius: 25px;
}
</style>
