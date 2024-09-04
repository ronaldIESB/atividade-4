import React from "react"

const SecondComponent = () => {
    const times = [
        {
            nome: "Flamengo",
            titulos: "300",
            estado: "Rio de Janeiro",
        },
        {
            nome: "Real Madrid",
            titulos: "30",
            estado: "Madrid",
        },
        {
            nome: "Barcelona",
            titulos: "6",
            estado: "Barcelona",
        },
        {
            nome: "Bayern de Munique",
            titulos: "5",
            estado: "Munique",
        },
        {
            nome: "Vasco",
            titulos: "0",
            estado: "Rio de Janeiro",
        }
    ]
    return (
        <div>Nome: {times[0].nome} <br />
        Titulos: {times[0].titulos} <br />
        Estado: {times[0].estado} <br /><br />
        
        Nome: {times[1].nome} <br />
        Titulos: {times[1].titulos} <br />
        Estado: {times[1].estado} <br /><br />
        
        Nome: {times[2].nome} <br />
        Titulos: {times[2].titulos} <br />
        Estado: {times[2].estado} <br /><br />
        
        Nome: {times[3].nome} <br />
        Titulos: {times[3].titulos} <br />
        Estado: {times[3].estado} <br /><br />
        
        Nome: {times[4].nome} <br />
        Titulos: {times[4].titulos} <br />
        Estado: {times[4].estado} <br /></div>
    )
}

export default SecondComponent