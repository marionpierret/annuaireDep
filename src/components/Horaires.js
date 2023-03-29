

const Horaires = (props) => {
    let content = props.horaires.map((h, i) => {
        return <li key={i}>Du {h.du} au {h.au} - De {h.heures[0].de} à {h.heures[0].a} </li>
    })
    return (
        <>
            <ul>
                {content}
            </ul>
        </>
    )
}

export default Horaires