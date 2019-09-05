const defaultStore = {
  users: [],
};

class Store {
  data = JSON.parse(localStorage.getItem('dataStore')) || defaultStore;
  setValue = (key, value, resolve=null) => {
    this.data[key] = value;
    localStorage.setItem('dataStore', JSON.stringify(this.data));
   
    fetch("http://localhost:3000/users",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify( this.data[key] )
    })
    .then(function(res){ 
      if(resolve){
        resolve();
      }
      return res.json();
    })
    .catch(function(res){ 
      console.log(res) 
    })
  }
  getValue = (key) => {
    return this.data[key];
  }

}




const appStore = new Store();

export default appStore;