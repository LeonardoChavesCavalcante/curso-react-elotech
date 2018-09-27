import React, { Component } from 'react'
import fotoPerfil from '../tatu.png'
import { Row } from "react-bootstrap"

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.setState({
            nome: 'Leonardo Cavalcante',
            usuario: '@Leonardo',
            urlFoto: 'https://avatars2.githubusercontent.com/u/7855298?s=400&u=dd70206633a23d45e2918212e86bd8fb487acdb9&v=4'
        }
        )
    }

    render() {
        return (
            <div>
                <div>
                    <Row>
                        <img src={fotoPerfil} className="App-foto-perfil" alt="logo" />
                    </Row>

                </div>


            </div>
        )
    }


}