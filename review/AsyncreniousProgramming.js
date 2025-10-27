async function findElement(locator) {
  return new Promise((resolve, rejected) => {
    if (locator == "calid-locator") {
      resolve("Element is found");
    } else {
      rejected("Element not found");
    }
  });

  async function clickElement(locator) {
    findElement(locator)
      .then((result) => {
        console.log(result);
        console.log("Element clicked");
      })
      .catch((error) => {
        console.log(error);
        console.log("Unable to click element");
      });
  }
}

// ----------------------------------

async function test() {
  // step1
  // await page.togo("https://www.example.com");
  await clickElement("valid-locator");
  // step3
}
