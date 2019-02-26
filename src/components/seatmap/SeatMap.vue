<template>
  <div class="seat-wrapper">
    <div class="row">
      <div>
        <h1 class="seat-header">Seat Map</h1>
      </div>
    </div>
    <div class="row" v-for="r in letters.substring(0,row).split('').reverse()" :key="r">
      <div class="box" v-for="c in column" @click="onSeatClick(`${r}${c}`)" :key="`${r}${c}`"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.seat-wrapper {
  width: 100%;
  overflow-y: auto;
}

.seat-header {
  margin-bottom: 1em;
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
  border: rgb(255, 57, 57) 3px solid;
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

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      row: 5,
      column: 10,
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
  },
  methods: {
    ...mapActions({
      addSeatSelect: 'doAddSeatSelect',
      removeSeatSelect: 'doRemoveSeatSelect'
    }),
    onSeatClick (id) {
      if (this.seats.seatSelected.includes(id)) {
        this.removeSeatSelect(id)
      } else {
        this.addSeatSelect(id)
      }
    },
    isBooked: (id) => {
      let seat = this.seatBooked
      return seat.includes(id)
    },
    isSelected: (id) => {
      let seat = this.seatSelected
      return seat.includes(id)
    }
  },
  computed: {
    ...mapState({
      seatBooked: state => state.seatBooked,
      seatSelected: state => state.seatSelected
    })
  },

  components: {

  }
}
</script>
