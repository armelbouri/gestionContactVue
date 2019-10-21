<template>
      <div class="wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="page-header">
                    <h2>Creer un Contact</h2>
                </div>
                <p>veuillez remplir ce formulaire pour creer un contact</p>
                <form action="#" method="post">
                   <div class="form-group">
                        <label class="control-label">Name</label>
                        <input type="text" name="name" class="form-control" required placeholder="nom">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Prenom</label>
                        <input type="text" name="prenom" class="form-control" required placeholder="prenom">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Civilite</label>
                        <input type="text" name="civilite" class="form-control" placeholder="civilite">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Telephone</label>
                        <input type="tel" name="telephone" class="form-control" placeholder="telephone">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Email</label>
                        <input type="email" name="email" class="form-control" placeholder="exemple@gmail.com">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Societe</label>
                        <input type="text" name="societe" class="form-control" placeholder="Digital-com">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Ville</label>
                        <input type="text" name="ville" class="form-control" placeholder="ville">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Naissance</label>
                        <input type="date" name="date" class="form-control" placeholder="date naissance">
                    </div>
                <input type="submit" class="btn btn-primary creer" value="Ajouter">
                <a href="../index.html" class="btn btn-default">Annuler</a>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



