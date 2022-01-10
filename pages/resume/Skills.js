function Skills({ skills }) {
    const { title } = skills?.fields || {};

    return <div>
        <p>{title ? title : null}</p>
    </div>
}

export default Skills
