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

    const allInputs = $.querySelectorAll("input");
    allInputs.forEach((singleInput) => (singleInput.value = ""));
    let message = $.getElementById("message");
    message.value = "";

    console.log(data);
    try {
      const response = await axios.post(
        "https://6756-89-90-186-203.ngrok.io/form",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  });
});
