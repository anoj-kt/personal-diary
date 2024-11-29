import EntryCard from './EntryCard';
import { useState, useEffect } from 'react';
import { getEntries } from '../utils/entries';

const AllEntries = () => {
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    setAllEntries(getEntries());
  }, []);

  return (
    <main className='my-4'>
      {allEntries.length ? (
        allEntries.map((entry) => <EntryCard key={entry.id} entry={entry} />)
      ) : (
        <h3 className='text-2xl text-error text-center'>No Entries to show</h3>
      )}
    </main>
  );
};

export default AllEntries;
