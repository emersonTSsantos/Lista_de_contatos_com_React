import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { startEditing, cancelEditing, saveEditing, setContacts, removeContact } from '../../store/slices/contactSlice';
import { SearchContainer, SearchInput, ResultList, ResultCard, ContactName, ContactDetail, ContainerBotoes, BotaoEditar } from './styles';
import AnimatedButton from '../AnimatedButton';
import gsap from 'gsap';
import { EditForm, EditInput, EditButton } from './styles'; 

const SearchBar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const editingId = useSelector((state: RootState) => state.contacts.editingId);
  
  const [query, setQuery] = useState('');
  const [editForm, setEditForm] = useState({ id: 0, name: '', email: '', phone: '' });
  const contactRefs = useRef<Record<number, HTMLDivElement | null>>({});

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

  const handleEditClick = (contact: typeof editForm) => {
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

  const handleRemoveComplete = (id: number) => {
    gsap.to(contactRefs.current[id], { opacity: 0, duration: 0.5, onComplete: () => {
      dispatch(removeContact(id));
    }});
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
          <ResultCard key={contact.id} ref={el => contactRefs.current[contact.id] = el}>
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
                <div>
                  <EditButton onClick={handleSaveClick}>Salvar</EditButton>
                  <EditButton cancel onClick={handleCancelClick}>Cancelar</EditButton>
                </div>
              </EditForm>
            ) : (
              <>
                <ContactName>{contact.name}</ContactName>
                <ContactDetail>Email: {contact.email}</ContactDetail>
                <ContactDetail>Telefone: {contact.phone}</ContactDetail>
                <ContainerBotoes>
                  <BotaoEditar onClick={() => handleEditClick(contact)}>
                    <img src="https://cdn3.iconfinder.com/data/icons/basicolor-essentials/24/006_edit-512.png" alt="" />
                  </BotaoEditar>
                  <AnimatedButton 
                    contactId={contact.id} 
                    onRemoveComplete={() => handleRemoveComplete(contact.id)} 
                  />
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
