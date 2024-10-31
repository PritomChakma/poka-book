const getStoreWishList = () => {
  const storeListStr = localStorage.getItem("Wish-list");
  if (storeListStr) {
    const storeList = JSON.parse(storeListStr);
    return storeList;
  } else {
    return [];
  }
};

const addSoterWishList = (id) => {
  const storeList = getStoreWishList();
  if (storeList.includes(id)) {
    console.log(id, "This id Already Exist");
  } else {
    storeList.push(id);
    const localStorageStr = JSON.stringify(storeList);
    localStorage.setItem("Wish list", localStorageStr);
  }
};
export { addSoterWishList };
