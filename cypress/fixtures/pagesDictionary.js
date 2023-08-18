const pages = new Map();

pages.set("SignUp","/signup");

function getDictionary(key){
    return pages.get(key) || "Not found";
  };

export default getDictionary;
