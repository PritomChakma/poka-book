import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../../utlity/addToStoreReadList";
const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storeReadList = getStoreReadList();
    const storeReadListInt = storeReadList.map((id) => parseInt(id));
    console.log(storeReadList, allBooks);

    const readBookList = allBooks.filter((book) =>
      storeReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, [allBooks]);

  return (
    <div>
      <h2>This is listed Book</h2>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-4xl">Book i read : {readList?.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
