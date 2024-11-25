export const fetchFAQ = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/fnq`, requestOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch FAQ');
    }
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    throw error;
  }
};
export const fetchGallery = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/gallery`, requestOptions);
      if (!response.ok) {
        throw new Error('Failed to fetch Gallery');
      }
      const result = await response.text();
      return JSON.parse(result);
    } catch (error) {
      console.error('Error fetching Gallery:', error);
      throw error;
    }
  };
export const postContact = async (contactData) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MDFhMTJiOWI3NzU0MDZiMzRlYTAxYSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyODIyOTc2OSwiZXhwIjoxNzI4MjM2OTY5fQ.mtDDUWP603OdjmfoNNCS-RVfl9YMs4wMve7FDtY-ssQ");
    
    const raw = JSON.stringify(contactData);
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, requestOptions);
      if (!response.ok) {
        throw new Error('Failed to post contact data');
      }
      const result = await response.text();
      return JSON.parse(result);
    } catch (error) {
      console.error('Error posting contact data:', error);
      throw error;
    }
};

export const postLogin = async (loginData) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(loginData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/login`, requestOptions);
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const postRegister = async (registerData) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(registerData);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/register`, requestOptions);
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};