<template>
  <div>
    <button class="btn btn-primary" @click="Anterior()">Back</button>
    <h1 class="font-weight-bold mt-3">Users</h1>

    <div class="row p-3 d-flex justify-content-center">
      <Cliente
        v-for="user in users"
        :user="user"
        :key="user.id"
        class="col-sm-3 mt-3"
      ></Cliente>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
import Cliente from '../components/ClientComponent'

export default {
  components: { Cliente },
  computed: {
    users () {
      return this.$store.getters['users/getUsers']
    }
  },
  data () {
    return {
      clienteId: {
        type: Object,
        required: true
      }
    }
  },
  methods: {
    Anterior () {
      this.$router.go(-1)
    },
    ...Vuex.mapMutations(['ShowClients', 'SetConsulted'])
  },
  created () {
    this.$store.dispatch('users/loadUsers')
  }
}
</script>
