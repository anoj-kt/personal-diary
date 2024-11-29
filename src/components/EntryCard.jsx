import { useState } from 'react';
import EntryDetailsModal from './EntryDetailsModal';

const EntryCard = ({ entry }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal((previousValue) => !previousValue);
  };

  const date = new Date(entry.date);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
  });

  return (
    <>
      <div
        className='flex bg-slate-700 w-1/2 mx-auto shadow-xl mb-4 h-42 rounded-2xl overflow-hidden cursor-pointer'
        onClick={toggleModal}
      >
        <img
          src={entry.imageUrl}
          alt={entry.title}
          className='w-1/5 object-cover'
        />
        <div className='card-body'>
          <h2 className='card-title'>{entry.title}</h2>
          <p>{formattedDate}</p>
        </div>
      </div>
      <EntryDetailsModal
        openModal={openModal}
        toggleModal={toggleModal}
        entry={entry}
      />
    </>
  );
};

export default EntryCard;
