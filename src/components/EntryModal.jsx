import { saveEntry } from '../utils/entries';

const EntryFormModal = ({ openModal, toggleModal }) => {
  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get('title');
    const content = formData.get('content');
    const imageUrl = formData.get('imageUrl');

    saveEntry({ title, content, imageUrl }); //Function that takes care of saving in localStorage
    toggleModal(); //Close the modal
    window.location.reload(); // Reload the app to show the new entry on the page
  };

  return (
    <dialog
      id='my_modal_1'
      className={`modal ${openModal ? 'modal-open' : ''}`}
    >
      <div className='modal-box'>
        <div className='flex justify-between items-center mb-4'>
          <span className='font-bold text-lg'>Diary entry</span>
          <button className='btn btn-error rounded-full' onClick={toggleModal}>
            &#10005;
          </button>
        </div>

        {/* Form */}
        <form className='w-full flex flex-col' onSubmit={submitHandler}>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className='input input-bordered w-full  mb-2'
          />
          <textarea
            className='textarea textarea-bordered mb-2 min-h-40 resize-none'
            placeholder='Content'
            name='content'
          ></textarea>
          <input
            type='text'
            placeholder='Image URL'
            name='imageUrl'
            className='input input-bordered w-full  mb-2'
          />
          <button className='btn btn-primary'>Save Entry</button>
        </form>
      </div>
    </dialog>
  );
};

export default EntryFormModal;
