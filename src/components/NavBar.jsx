import { useState } from 'react';
import { entryExistsForToday } from '../utils/entries';
import EntryFormModal from './EntryModal';

const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);

  // Will only open the entry form if there is no entry made for today
  const openEntryFormModal = () => {
    if (entryExistsForToday()) {
      return alert('You have already made an entry today. Come back tomorrow!');
    }

    setOpenModal(true);
  };

  const toggleModal = () => {
    setOpenModal((previousValue) => !previousValue);
  };

  return (
    <div className='navbar bg-base-100 flex justify-between w-3/4 mx-auto'>
      <a className='btn btn-ghost text-xl'>Personal Diary</a>
      <button className='btn btn-primary' onClick={openEntryFormModal}>
        Add Entry
      </button>
      <EntryFormModal openModal={openModal} toggleModal={toggleModal} />
    </div>
  );
};

export default NavBar;
