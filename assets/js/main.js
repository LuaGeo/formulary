const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  $.querySelector("#contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("hello");

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };

    console.log(data);
    try {
      const response = await axios.post("http://localhost:3000/form", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
});
