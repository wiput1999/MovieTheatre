<template>
  <div class="background">
    <div class="content">
      <div class="container">
        <div>
          <div class="box">
            <h1>Register</h1>
            <Form ref="form" label-position="left" :label-width="140">
              <FormItem label="E-mail" prop="email">
                <input type="text" v-model="email">
              </FormItem>
              <FormItem label="Username" prop="username">
                <input type="text" v-model="username">
              </FormItem>
              <FormItem label="Password" prop="password">
                <input type="password" v-model="password">
              </FormItem>
              <FormItem label="Confirm Password" prop="cpassword">
                <input type="password" v-model="cpassword">
              </FormItem>
              <FormItem>
                <a class="button" @click="doRegister">Register</a>
              </FormItem>
            </Form>
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
  align-content: center;
  height: 100vh;
}

.box {
  width: 400px;
  padding: 25px;
  background-color: #393939;
  border: #5798f2 6px solid;
  border-radius: 5px;

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
}

.button {
  margin-top: 0.5em;
  padding: 0.3em 1.7em;
  border: #5798f2 solid 2px;
  color: #fff;
  border-radius: 25px;
}
</style>

<script>

export default {
  name: 'signup',
  data () {
    return {
      email: '',
      username: '',
      password: '',
      cpassword: ''
    }
  },
  methods: {
    doRegister () {
      alert('Done!')
    }
  },
  components: {
  }
}
</script>
