import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactState {
  contacts: Contact[];
  editingId: number | null;
}

const initialState: ContactState = {
  contacts: [],
  editingId: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts(state, action: PayloadAction<Contact[]>) {
      state.contacts = action.payload;
    },
    startEditing(state, action: PayloadAction<number>) {
      state.editingId = action.payload;
    },
    cancelEditing(state) {
      state.editingId = null;
    },
    saveEditing(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
        state.editingId = null;
      }
    },
    removeContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      state.editingId = null;
    },
  },
});

export const { setContacts, startEditing, cancelEditing, saveEditing, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
