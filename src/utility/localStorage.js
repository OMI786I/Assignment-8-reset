import toast from "react-hot-toast";

const getStoredListedBooks = () => {
  const storedListedBooks = localStorage.getItem("listed-books");
  if (storedListedBooks) {
    return JSON.parse(storedListedBooks);
  }
  return [];
};

const listedBooks = (id) => {
  const storedListedBooks = getStoredListedBooks();
  const exists = storedListedBooks.find((listId) => listId == id);
  if (!exists) {
    storedListedBooks.push(id);
    localStorage.setItem("listed-books", JSON.stringify(storedListedBooks));
    toast.success("successfully added");
  } else toast.error("already exist");
};

export { getStoredListedBooks, listedBooks };
