console.log("home javascript file");

// short url input
const inputShortButton = document.querySelector(".input-short-button");

inputShortButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const urlInput = document.querySelector(".input-url");
  const shortedUrlInput = document.querySelector(".shorted-url");

  if (!urlInput.value) {
    iziToast.error({
      title: "Error",
      message: "Please enter a url",
      theme: "dark",
      backgroundColor: "#AA0808",
      position: "topCenter",
      progressBarColor: "white",
      transitionInMobile: "fadeInUp",
      transitionOutMobile: "fadeOutUp",
    });
    return;
  } else {
    try {
      let inputUrl = urlInput.value.trim(); // Trim any leading/trailing whitespaces

      // Check if the input URL starts with "https://" or "http://"
      if (!inputUrl.startsWith("https://") && !inputUrl.startsWith("http://")) {
        // If not, prepend "https://"
        inputUrl = "https://" + inputUrl;
        console.log(inputUrl);
      }

      const response = await fetch("/addUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: inputUrl }),
      });

      if (response.ok) {
        const responseData = await response.json();
        shortedUrlInput.value = responseData.url.shortUrl;
      } else {
        console.error("Failed to shorten URL");
      }
    } catch (error) {
      iziToast.error({
        title: "Error",
        message: "Url Already Exists",
        theme: "dark",
        backgroundColor: "#AA0808",
        position: "topCenter",
        progressBarColor: "white",
        transitionInMobile: "fadeInUp",
        transitionOutMobile: "fadeOutUp",
      });
      console.error("Error:", error);
    }
  }
});

// copy to clipboard
const copyButton = document.querySelector(".copy-button");

copyButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const shortedUrlInput = document.querySelector(".shorted-url");
  if (!shortedUrlInput.value) {
    iziToast.error({
      title: "Error",
      message: "Please short the url first",
      theme: "dark",
      backgroundColor: "#AA0808",
      position: "topCenter",
      progressBarColor: "white",
      transitionInMobile: "fadeInUp",
      transitionOutMobile: "fadeOutUp",
    });
    return;
  } else {
    shortedUrlInput.select();
    shortedUrlInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    iziToast.success({
      title: "Success",
      message: "Copied to clipboard",
      theme: "dark",
      backgroundColor: "#0E9A00",
      position: "topCenter",
      progressBarColor: "white",
      transitionInMobile: "fadeInUp",
      transitionOutMobile: "fadeOutUp",
    });
  }
});

// handel history
const historyButton = document.querySelector(".url-history-button");
const heading = document.querySelector(".heading");
const shortUrlContainer = document.querySelector(".shotUrl-container");
const historyContainer = document.querySelector(
  ".url-history-button-container"
);

let toggle = false; // Declare toggle outside the event listener

historyButton.addEventListener("click", () => {
  console.log("history button clicked");

  // Toggle the value of the toggle variable
  toggle = !toggle;

  // Change the display property of elements based on the toggle state
  historyContainer.style.display = toggle ? "flex" : "none";
  heading.style.display = toggle ? "none" : "flex";
  shortUrlContainer.style.display = toggle ? "none" : "flex";
});

// copy the url from history

function copyToClipboard(text) {
  // Create a temporary input element
  var input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);

  // Select and copy the text
  input.select();
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(input);
  iziToast.success({
    title: "Success",
    message: "Copied to clipboard",
    theme: "dark",
    backgroundColor: "#0E9A00",
    position: "topCenter",
    progressBarColor: "white",
    transitionInMobile: "fadeInUp",
    transitionOutMobile: "fadeOutUp",
  });
}
