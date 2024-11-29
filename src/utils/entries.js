const getEntries = () => {
  const allEntries = JSON.parse(localStorage.getItem('entries')) || [];

  return allEntries;
};

const saveEntry = (entryDetails) => {
  const { title, content, imageUrl } = entryDetails;
  const todaysDate = new Date();
  const id = Date.now() + Math.random(); //Not the best way to create a unique id, but works for a small app

  if (!title || !content || !imageUrl) {
    return alert('Pls enter all information');
  }

  let allEntries = JSON.parse(localStorage.getItem('entries'));

  //Checking if allEntries is an array. If it's null or any other data type we reset it to an empty array.
  // This prevents the push method below from throwing an error.
  if (!Array.isArray(allEntries)) {
    allEntries = [];
  }

  allEntries.push({ id, title, content, imageUrl, date: todaysDate });

  localStorage.setItem('entries', JSON.stringify(allEntries));
};

// This function checks if there is an entry for today
const entryExistsForToday = () => {
  const allEntries = JSON.parse(localStorage.getItem('entries')) || [];
  const todaysDate = new Date();

  return allEntries.some((entry) => {
    const entryDate = new Date(entry.date);

    const entryExists =
      entryDate.getDate() === todaysDate.getDate() &&
      entryDate.getMonth() === todaysDate.getMonth() &&
      entryDate.getFullYear() === todaysDate.getFullYear();

    return entryExists;
  });
};

export { saveEntry, getEntries, entryExistsForToday };
