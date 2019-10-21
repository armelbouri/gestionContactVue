<template>
<div class="wrapper">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="page-header clearfix">
                    <h2 class="pull-left">Liste des Contacts</h2>
                    <router-link to="/ajouter">
                        <a href="#" class="btn btn-success pull-right">Ajout Contact</a>
                   </router-link>
                </div>

                <table class='table table-bordered table-striped'>
                      <thead>
                            <tr>
                                <th>No</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Civilite</th>
                                <th>Telephone</th>
                                <th>Email</th>
                                <th>Societe</th>
                                <th>Ville</th>
                                <th>Naissance</th>
                                <th>operation</th>
                            </tr>
                      </thead>
                      <tbody>
                          <tr v-for= "contact in contacts">
                              <td>1</td>
                              <td>Moudine</td>
                              <td>Armel</td>
                              <td>Homme</td>
                              <td>62969866</td>
                              <td>Moudinearmel@gmail.com</td>
                              <td>Digital-com</td>
                              <td>N'djamena</td>
                              <td>16/08/1994</td>
                              <td>
                                  <router-link to="/detail">
                                     <a href='#' title='detail' data-toggle='tooltip'><span class='glyphicon glyphicon-eye-open'></span>detail</a>
                                  </router-link>
                                  <a href='html/editer.html' title='editer' data-toggle='tooltip'><span class='glyphicon glyphicon-pencil'>editer</span></a>
                                  <a href='' title='Supprimer' data-toggle='tooltip'><span class='glyphicon glyphicon-trash'></span>supprimer</a>
                              </td>
                          </tr>
                      </tbody>
                </table>
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
      contacts: [{
        'id':1,
        'nom':'Moudine',
        'prenom':'Armel',
        'civilite':'Homme',
        'telephone':'62969866',
        'email':'moudinearmel@gmail.com',
        'societe':'Digital-com',
        'ville':'Ndjamena',
        'naissance':'16/08/1994'

      },
      {
        'id':2,
        'nom':'Moudine',
        'prenom':'Armel',
        'civilite':'Homme',
        'telephone':'62969866',
        'email':'moudinearmel@gmail.com',
        'societe':'Digital-com',
        'ville':'Ndjamena',
        'naissance':'16/08/1994'

      },
      {
        'id':3,
        'nom':'Moudine',
        'prenom':'Armel',
        'civilite':'Homme',
        'telephone':'62969866',
        'email':'moudinearmel@gmail.com',
        'societe':'Digital-com',
        'ville':'Ndjamena',
        'naissance':'16/08/1994'

      },
      {
        'id':4,
        'nom':'Moudine',
        'prenom':'Armel',
        'civilite':'Homme',
        'telephone':'62969866',
        'email':'moudinearmel@gmail.com',
        'societe':'Digital-com',
        'ville':'Ndjamena',
        'naissance':'16/08/1994'

      },

      ],
    }
  },
  methods:{
    liste(){
      return contacts;
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
