 function getFormattedTime() {
          const now = new Date();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const seconds = now.getSeconds().toString().padStart(2, '0');
          return `${hours}:${minutes}:${seconds}`;
      }

    console.log(getFormattedTime()); // Example output: "00:15:00"
      // const date = new Date();
      // const displayElement=document.getElementById("time");
      // displayElement.innerHTML(date);