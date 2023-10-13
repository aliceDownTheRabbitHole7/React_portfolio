function Qualifications() {
    const qualificationsArray = [
        {
            qual: 'Effective team player.',
            id: '1'
        },
        {
            qual: 'Expert analytical capabilities.',
            id: '2',
        },
        {
            qual: 'Superior communication skills.',
            id: '3'
        },
        {
            qual: 'Able to grasp complex subjects.',
            id: '4'
        },
        {
            qual: 'Exceedingly diligent worker.',
            id: '5'
        }
    ]

    const qualificationsList = qualificationsArray.map(qualification => (
        <li key={qualification.id} className='list-item'>
            {qualification.qual}
        </li>
    ))

    return (
        <>
            <h2 id="qualifications-head">
                <b>Qualifications</b>
            </h2>
            <ul id='qualifications-list'>
                {qualificationsList}
            </ul>
        </>
    )
}

export default Qualifications;