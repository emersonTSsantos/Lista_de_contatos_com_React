import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { startEditing, cancelEditing, saveEditing, removeContact, setContacts } from '../../store/slices/contactSlice';
import { 
  SearchContainer, 
  SearchInput, 
  ResultList, 
  ResultCard, 
  ContactName, 
  ContactDetail, 
  ContainerBotoes, 
  BotaoRemover, 
  BotaoEditar, 
  EditForm, 
  EditInput, 
  EditButton 
} from './styles';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const SearchBar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const editingId = useSelector((state: RootState) => state.contacts.editingId);
  
  const [query, setQuery] = useState('');
  const [editForm, setEditForm] = useState<Contact>({ id: 0, name: '', email: '', phone: '' });

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(setContacts([
        { id: 1, name: 'João Silva', email: 'joao.silva@example.com', phone: '(11) 98765-4321' },
        { id: 2, name: 'Maria Oliveira', email: 'maria.oliveira@example.com', phone: '(21) 91234-5678' },
        { id: 3, name: 'Pedro Santos', email: 'pedro.santos@example.com', phone: '(31) 99876-5432' },
      ]));
    }
  }, [contacts, dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleEditClick = (contact: Contact) => {
    dispatch(startEditing(contact.id));
    setEditForm(contact);
  };

  const handleSaveClick = () => {
    dispatch(saveEditing(editForm));
    setEditForm({ id: 0, name: '', email: '', phone: '' });
  };

  const handleCancelClick = () => {
    dispatch(cancelEditing());
    setEditForm({ id: 0, name: '', email: '', phone: '' });
  };

  const handleRemoveClick = (id: number) => {
    dispatch(removeContact(id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Buscar contato..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ResultList>
        {filteredContacts.map(contact => (
          <ResultCard key={contact.id}>
            {editingId === contact.id ? (
              <EditForm>
                <EditInput
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleChange}
                  placeholder="Nome"
                />
                <EditInput
                  type="text"
                  name="email"
                  value={editForm.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                <EditInput
                  type="text"
                  name="phone"
                  value={editForm.phone}
                  onChange={handleChange}
                  placeholder="Telefone"
                />
                <EditButton onClick={handleSaveClick}>Salvar</EditButton>
                <EditButton onClick={handleCancelClick} cancel>Cancelar</EditButton>
              </EditForm>
            ) : (
              <>
                <ContactName>{contact.name}</ContactName>
                <ContactDetail>Email: {contact.email}</ContactDetail>
                <ContactDetail>Telefone: {contact.phone}</ContactDetail>
                <ContainerBotoes>
                  <BotaoEditar onClick={() => handleEditClick(contact)}>
                    <img src="https://cdn3.iconfinder.com/data/icons/basicolor-essentials/24/006_edit-512.png" alt="Editar" />
                  </BotaoEditar>
                  <BotaoRemover onClick={() => handleRemoveClick(contact.id)}>Remover</BotaoRemover>
                </ContainerBotoes>
              </>
            )}
          </ResultCard>
        ))}
      </ResultList>
    </SearchContainer>
  );
};

export default SearchBar;
