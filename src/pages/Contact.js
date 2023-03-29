import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import ContactForm from "../components/ContactForm";

const Contact = () => {

const [visible, setVisible] = useState(false)


    return (
        <div>
            <h1>Contactez-nous</h1>
        <div>
            <h2>Adresse:</h2>
            <p>*****</p>
            <h2>Téléphone:</h2>
            <p>*****</p>
        </div>
        <h2>Vous préférez nous écrire?</h2>
        <Button variant="primary" onClick={() => setVisible(!visible)}>{visible ? 'Formulaire de contact' : 'Formulaire de contact'} </Button>
        {visible && <div><ContactForm/></div>}
        </div>
    )
}

export default Contact