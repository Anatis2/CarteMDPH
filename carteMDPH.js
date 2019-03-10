
$(function() {
    
    $('[id*=depart_').on('click', function() { // Quand on clique sur un département
        
        let departement = $(this);
        let departementId = $(this)["0"].id;
        let allDepartements = $('[id*=depart_');
        
        departementId = departementId.replace('depart_', '');
        
        allDepartements.css('fill', '#800000'); // Tous les départements autres redeviennent rouges    
        departement.css('fill', '#00ff80'); // Le département sur lequel on a cliqué devient vert
 
        let url = "https://etablissements-publics.api.gouv.fr/v1/organismes/" + departementId + "/maison_handicapees";
        let json = $.getJSON(url, function() {
                    let jsonTotalDep = JSON.parse(json.responseText);
                    console.log(jsonTotalDep);
                    let jsonAdresse = jsonTotalDep.features[0].properties.Adresse.Ligne;
                    let jsonCodePostal = jsonTotalDep.features[0].properties.Adresse.CodePostal;
                    let jsonNomCommune = jsonTotalDep.features[0].properties.Adresse.NomCommune;
                    let jsonTelephone = jsonTotalDep.features[0].properties.CoordonnéesNum.Téléphone;
                    let jsonFax = jsonTotalDep.features[0].properties.CoordonnéesNum.Télécopie;
                    let jsonMail = jsonTotalDep.features[0].properties.CoordonnéesNum.Email;
                    let jsonURL = jsonTotalDep.features[0].properties.CoordonnéesNum.Url;
                    //let jsonOuvertureDebut = jsonTotalDep.features[0].properties.Ouverture.PlageJ.début;
                    //let jsonOuvertureFin = jsonTotalDep.features[0].properties.Ouverture.PlageJ.fin;
                    //let jsonHeureDebut = jsonTotalDep.features[0].properties.Ouverture.PlageJ.PlageH.début;
                    //let jsonHeureFin = jsonTotalDep.features[0].properties.Ouverture.PlageJ.PlageH.fin;
                    $('#infosDepartement').html("<strong>N° de département : </strong>" + departementId + "<br/><br/>"
                                                + "<strong>Adresse : </strong><br/>" + jsonAdresse + "<br/>" 
                                                + jsonCodePostal + " " + jsonNomCommune + "<br/><br/>"
                                                + "<strong>Téléphone : </strong>" + jsonTelephone + "<br/>"
                                                + "<strong>Fax : </strong>" + jsonFax + "<br/>"
                                                + "<strong>Mail : </strong>" + jsonMail + "<br/><br/>"
                                                + "<strong>Site web : </strong><a href='" + jsonURL + "'>" + jsonURL + "</a><br/><br/>"
                                                /*+ "<strong>Ouverture : </strong>du " + jsonOuvertureDebut + " au " + jsonOuvertureFin
                                                + " de " + jsonHeureDebut + " à " + jsonHeureFin*/);
                    
                  })
                  
    });
})


/*$(function() {
    
    $('[id*=depart_').hover(function() { // Quand on survole un département
        
        let departement = $(this);
        let departementId = $(this)["0"].id;
        let allDepartements = $('[id*=depart_');
        
        departementId = departementId.replace('depart_', '');
        
        $('#infoBulle').html("N° de département au survol de la souris : " + departementId + "<br/><br/>");
    });
    
})*/