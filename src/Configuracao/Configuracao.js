import React, { Component } from 'react'
import { Button, Form, Col } from "react-bootstrap"

export default class Configuracao extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            usuario: '',
            urlFoto: '',
        }
    }
    onChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <Col md={6}>
                    <Form className="PanelFormTatuiter">
                        <Form.Row>
                            <Form.Group as={Col} controlId="nome" md={8}>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control name="nome" value={this.state.nome} onChange={this.onChange} type="text"
                                    placeholder="Digite o nome aqui" />
                                {this.state.nome}
                            </Form.Group>
                            <Form.Group controlId="usuario" as={Col} md={4}>
                                <Form.Label>Usuário</Form.Label>
                                <Form.Control value={this.props.idade} onChange={this.onChange} type="text" name="usuario"
                                    placeholder="Digite usuário" />
                            </Form.Group>
                        </Form.Row>


                        <Form.Row>
                            <Form.Group controlId="teste" as={Col} md={12}>
                                <Form.Label>URL da foto </Form.Label>
                                <Form.Control value={this.props.time} onChange={this.onChange} type="text" name="urlFoto"
                                    placeholder="Digite a URL" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Col md={10}>
                            </Col>
                            <Col md={2}>
                                <Button  className="col-md-12" type="button" variant="default">Salvar</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
            </div>
        )
    }


}