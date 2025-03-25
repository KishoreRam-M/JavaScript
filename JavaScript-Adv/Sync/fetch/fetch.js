async function getUser() {
    try {
      let response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      console.log(data.results[0]);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  getUser(); 
  