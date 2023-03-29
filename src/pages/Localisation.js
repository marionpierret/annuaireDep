import React from "react"
import axios from 'axios'
import Button from "react-bootstrap/Button"
import {useState} from "react"
import Etablissement from "../components/Etablissement"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Localisation = () => {

const [adminData, setAdminData] = useState('')

const Search = (dep, type) => {
    axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/${dep}/${type}`)
    .then(response => setAdminData(response.data.features))
}


    return (
        <div>
            <h1>Rechercher un établissement</h1>
            <Button variant="secondary" onClick={()=> Search('77', 'mairie')}>Mairies</Button>
            <Button variant="secondary" onClick={()=> Search('77','commissariat_police')}>Commissariats de police</Button>
            <Button variant="secondary" onClick={()=> Search('77','pole_emploi')}>Pôle emploi</Button>
            <Button variant="secondary" onClick={()=> Search('77','prefecture')}>Préfecture</Button> 
        
        <Row>
       {adminData && adminData.map((e, i) => {
        return (<> 
        <Col md={6} key={e.properties.id}>
        <Etablissement
            adresses = {e.properties.adresses}
            horaires = {e.properties.horaires}
            id = {e.properties.id}
            nom = {e.properties.nom}
            telephone = {e.properties.telephone}
            mail = {e.properties.email}
            url = {e.properties.url}
        />
        </Col>
        </>
        )
       })}
       </Row>
  
       
        </div>
    )
}

export default Localisation