// Login
const API_URL = "https://fakestoreapi.com/auth/login";

// User Login Function
export async function login(username, password){
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username,
        password
      })
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
}