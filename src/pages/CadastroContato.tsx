import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { Container, FormWrapper, Input, Button, ButtonVoltar, StyledLink } from './CadastroContatoStyles';
import { addContact } from '../store/slices/contactSlice';

const CadastroContato: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (values: any) => {
        const newContact = {
            id: Date.now(), // ou você pode usar um gerador de ID mais robusto
            name: values.name,
            email: values.email,
            phone: values.phone
        };
        dispatch(addContact(newContact));
        navigate('/'); // Redireciona de volta à página inicial após o cadastro
    };

    return (
        <>
            <StyledLink to="/">
                <ButtonVoltar>
                    <i className="fa-solid fa-reply"></i>
                    <span>Voltar para lista de contatos</span>
                </ButtonVoltar>
            </StyledLink>

            <Container>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <FormWrapper onSubmit={handleSubmit}>
                            <h2>Cadastrar Novo Contato</h2>
                            <Field name="name">
                                {({ input }) => (
                                    <Input {...input} placeholder="Nome" />
                                )}
                            </Field>
                            <Field name="email">
                                {({ input }) => (
                                    <Input {...input} type="email" placeholder="Email" />
                                )}
                            </Field>
                            <Field name="phone">
                                {({ input }) => (
                                    <Input {...input} type="tel" placeholder="Telefone" />
                                )}
                            </Field>
                            <Button type="submit">Cadastrar</Button>
                        </FormWrapper>
                    )}
                />
            </Container>
        </>
    );
};

export default CadastroContato;
