<template>
  <div class="background">
    <div class="content">
      <div class="container">
        <div>
          <center style="margin-bottom:20px;">
            <h1>YOUR BOOKED SEATS</h1>
          </center>
        </div>
        <div class="container-2" v-show="!list[0].del">
          <div class="movie">
            <div class="movie-card">
              <img :src="list[0].img">
              <h1>{{list[0].title}}</h1>
            </div>
          </div>
          <div>
            <div class="box">
              <h2>Wiput Cinema</h2>
              <span>{{today}}</span>
              <h5>SELECTED SEAT</h5>
              <div class="list">

              </div>
              <h5>TICKET PRICE</h5>
              <div class="ticket-price-wrapper">Adult : 1 Pax. (150 Baht)</div>
              <div class="ticket-price-wrapper">Child : 1 Pax. (100 Baht)</div>
              <div class="ticket-price-wrapper price-total">Total : 250 Baht</div>
            </div>
            <div class="ticket-action">
              <a class="finish-button" @click="show">E-Mail</a>
              <a class="cancel-button" @click="cancel(list[0])">Cancel</a>
            </div>
          </div>
        </div>

        <div class="container-2" v-show="!list[1].del">
          <div class="movie">
            <div class="movie-card">
              <img :src="list[1].img">
              <h1>{{list[1].title}}</h1>
            </div>
          </div>
          <div>
            <div class="box">
              <h2>Teerapat Cinema</h2>
              <span>{{today}}</span>
              <h5>SELECTED SEAT</h5>
              <div class="list">

              </div>
              <h5>TICKET PRICE</h5>
              <div class="ticket-price-wrapper">Adult : 1 Pax. (150 Baht)</div>
              <div class="ticket-price-wrapper">Child : 1 Pax. (100 Baht)</div>
              <div class="ticket-price-wrapper price-total">Total : 250 Baht</div>
            </div>
            <div class="ticket-action">
              <a class="finish-button" @click="show">E-Mail</a>
              <a class="cancel-button" @click="cancel(list[1])">Cancel</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .movie-card {
    box-shadow: 0px 7px 28px rgba(0, 0, 0, 0.12);
    border-radius: 37px;
    width: 80%;
    max-width: 250px;
    min-width: 200px;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 3em;
    background-size: cover;

    img {
      border-radius: 37px;
      width: 100%;
      height: auto;
    }
  }

  .background {
    width: 100%;
    background: linear-gradient(to right,
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
      #272a5f);
  }

  .finish-button {
    margin: 1em;
    background-color: #30b736;
    padding: 1em 3em;
    color: #fff;
    border-radius: 25px;
  }

  .cancel-button {
    margin: 1em;
    background-color: #d30d0d;
    padding: 1em 3em;
    color: #fff;
    border-radius: 25px;
  }

  .content {
    width: 100%;
    background: rgba(34, 34, 34, 0.4);
  }

  .container {
    width: 80vw;
    margin: 0 auto;
    padding: 100px 0;
    justify-content: center;
    align-content: center;
    min-height: 100vh;
  }

  //  .container {
  //   width: 80vw;
  //   margin: 0 auto;
  //   padding: 100px 0;
  //   display: flex;
  //   justify-content: center;
  //   align-content: center;
  //   height: 100vh;
  // }
  .container-2 {
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-content: center;
  }

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

</style>

<script>
  import MovieCard from '@/components/common/MovieCard.vue'
  export default {
    name: 'refund',
    data: function () {
      return {
        list: [{
          img: "https://lh3.googleusercontent.com/3Ost-FvXYMVAs84hLxJAn9qqIh9s_YCC8oCySCuOWIJWIu8zPIuKYJ9FG_FEFBqKZoQnguVOuNAkg9kArkPM",
          title: "Captain Marvel",
          del: false
        }, {
          img: "https://lh3.googleusercontent.com/m-KIGZSYMapNnCIGB3QVXPlqkv7Vu_-VoEXqdleoNZ-CDRVdprMcoUanKbMHeFjlXk38FYPxW0Gar0XEQYI",
          title: "Alita: Battle Angel",
          del: false
        }]
      }
    },
    components: {},
    computed: {
      loginDisable() {
        return this.username === '' && this.password === ''
      }
    },
    methods: {
      show() {
        alert("Sended to your email")
      },
      print() {
        window.print();
      },
      cancel(blog) {
        var r = confirm("Want to cancel your seats?");
        if (r == true) {
          blog.del = true;
        }
      }
    }
  }

</script>
