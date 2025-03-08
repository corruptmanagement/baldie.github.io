document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  // Function to save form data to local storage
  function saveFormData() {
      const formData = {
          firstName: document.getElementById("firstName").value,
          lastName: document.getElementById("lastName").value,
          address1: document.getElementById("address1").value,
          address2: document.getElementById("address2").value,
          city: document.getElementById("city").value,
          country: document.getElementById("country").value,
          phone: document.getElementById("phone").value,
          email: document.getElementById("email").value,
          event: document.getElementById("event").value,
          property: document.getElementById("property").value,
          checkIn: document.getElementById("checkIn").value,
          checkIntime: document.getElementById("checkIntime").value,
          checkOut: document.getElementById("checkOut").value,
          checkOuttime: document.getElementById("checkOuttime").value,
          message: document.getElementById("message").value
      };

      localStorage.setItem("bookingForm", JSON.stringify(formData));
      alert("Form data saved successfully!");
  }

  // Function to load saved data
  function loadFormData() {
      const savedData = localStorage.getItem("bookingForm");
      if (savedData) {
          const formData = JSON.parse(savedData);

          document.getElementById("firstName").value = formData.firstName || "";
          document.getElementById("lastName").value = formData.lastName || "";
          document.getElementById("address1").value = formData.address1 || "";
          document.getElementById("address2").value = formData.address2 || "";
          document.getElementById("city").value = formData.city || "";
          document.getElementById("country").value = formData.country || "";
          document.getElementById("phone").value = formData.phone || "";
          document.getElementById("email").value = formData.email || "";
          document.getElementById("event").value = formData.event || "";
          document.getElementById("property").value = formData.property || "";
          document.getElementById("checkIn").value = formData.checkIn || "";
          document.getElementById("checkIntime").value = formData.checkIntime || "";
          document.getElementById("checkOut").value = formData.checkOut || "";
          document.getElementById("checkOuttime").value = formData.checkOuttime || "";
          document.getElementById("message").value = formData.message || "";
      }
  }

  // Save data on form submit
  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents actual form submission
      saveFormData();
  });

  // Load saved data when the page loads
  loadFormData();
});
