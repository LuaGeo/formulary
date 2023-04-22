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
      const response = await axios.post(
        "https://2928-89-90-186-203.ngrok.io",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
});
