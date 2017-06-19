<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.photo"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="photo" @change="onFileChange" type="file" accept="image/*" class="mdl-textfield__input" placeholder=""/>
          <label for="photo" class="mdl-textfield__label">Photo</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      'title': '',
      'photo': ''
    }
  },
  methods: {
    postCat () {
      this.$root.$firebaseRefs.cat.push({
        'url': this.photo,
        'comment': this.title,
        'info': 'Posted by Charles on Tuesday',
        'created_at': -1 * new Date().getTime()
      })
      .then(this.$router.push('/'))
    },
    onFileChange (event) {
      let files = event.target.files || event.dataTransfer.files

      this.createImage(files[0])
    },
    createImage (file) {
      let reader = new FileReader()

      reader.onload = (e) => {
        this.photo = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>
