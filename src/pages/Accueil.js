import React from "react"
import Image from 'react-bootstrap/Image'
import seineEtMarne from "../assets/images/LA SEINE-ET-MARNE.png"

const Accueil = () => {

    return (
        <div class="row">
        <div className="text-center">
           <h1>Bienvenue sur l'annuaire de la Seine-et-Marne</h1>
           <p>Le site vous aidant à trouver les établissements publiques de Seine-et-Marne</p>
           <Image src={seineEtMarne} fluid thumbnail style = {{width:"60%"}} className="rounded mx-auto d-block"/>
        </div>
        </div>
    )
}

export default Accueil