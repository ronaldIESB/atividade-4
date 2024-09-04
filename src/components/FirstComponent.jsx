import React from "react"

const FirstComponent = () => {
    const info = {
        nome: "Ronald",
        sobrenome: "Freitas",
        matricula: "2314290032",
        professor: "Felipe",
        materia: "construção de Backend"
    }

    return (
        <div> Aluno: {info.nome} {info.sobrenome} <br />
        Professor: {info.professor} <br />
        materia: {info.materia} </div>
    )
}

export default FirstComponent