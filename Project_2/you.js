
  document.body.style.display = "none";

  function checkTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if (hours === 19 && minutes === 0) {
      document.body.style.display = "block";

      // Hide after 1 HOUR
      setTimeout(() => {
        document.body.style.display = "none";
      }, 3600000); // ← this is 1 hour
    }
  }

  setInterval(checkTime, 1000);
