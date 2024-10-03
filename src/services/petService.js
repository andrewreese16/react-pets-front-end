const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

async function index() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

// CREATE REQUEST
async function create(formData) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export { index, create };

