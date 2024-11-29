const EntryDetailsModal = ({ openModal, toggleModal, entry }) => {
  return (
    <dialog
      id='my_modal_1'
      className={`modal ${openModal ? 'modal-open' : ''}`}
    >
      <div className='modal-box h-4/5'>
        <div className='flex flex-col justify-between items-center mb-4'>
          <div className='relative w-full'>
            <button
              className='btn btn-error rounded-full absolute right-2 top-2'
              onClick={toggleModal}
            >
              &#10005;
            </button>
            <img
              src={entry.imageUrl}
              alt={entry.title}
              className='w-full h-52 object-cover '
            />
          </div>
          <div className='w-full card-body'>
            <h3 className='font-bold text-lg'>{entry.title}</h3>
            <p>{entry.content}</p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default EntryDetailsModal;
