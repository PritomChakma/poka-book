const getStoreReadList = () => {
  const storeListStr = localStorage.getItem("read-list");
  if (storeListStr) {
    const storeList = JSON.parse(storeListStr);
    return storeList;
  } else {
    return [];
  }
};

const addSoterReadList = (id) => {
  const storeList = getStoreReadList();
  if (storeList.includes(id)) {
    console.log(id, "This id Already Exist");
  } else {
    storeList.push(id);
    const localStorageStr = JSON.stringify(storeList);
    localStorage.setItem("read list", localStorageStr);
  }
};
export { addSoterReadList, getStoreReadList };
