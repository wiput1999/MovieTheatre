<template>
  <div class="background">
    <div class="content">
      <div class="container">
        <div class="box">
          <h1>Login</h1>
          <Form ref="form" label-position="left" :label-width="90">
            <FormItem label="Username" prop="name">
              <input type="text">
            </FormItem>
            <FormItem label="Password" prop="password">
              <input type="password">
            </FormItem>
            <div class="button-row">
              <a class="button">Login</a>&nbsp;&nbsp;
              <router-link to="/register" class="button-register">Register</router-link>
            </div>
          </Form>
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
}

.box {
  width: 325px;
  padding: 25px;
  background-color: #393939;
  border: #5798f2 6px solid;
  border-radius: 5px;

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
}

.button-row {
  text-align: center;
}

.button {
  margin-top: 0.5em;
  padding: 0.3em 1.7em;
  border: #5798f2 solid 2px;
  color: #fff;
  border-radius: 25px;
}

.button-register {
  margin-top: 0.5em;
  padding: 0.3em 1.7em;
  border: #5798f2 solid 2px;
  color: #fff;
  border-radius: 25px;
}
</style>

<script>

export default {
  name: 'login',
  components: {
  }
}
</script>
