const searchBtn = document.querySelector(".search_btn");
const searchInp = document.querySelector(".search_input");
const hitUrl = async (e) => {
  e.preventDefault();
  location.assign(`/search/${searchInp.value}`);
};

export const search = () => {
  searchBtn.addEventListener("click", hitUrl);
  searchInp.addEventListener("keypress", function(e) {
    if (e.key == "Enter") hitUrl(e);
  });
};
