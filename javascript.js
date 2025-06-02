<script>
    function validateForm() {
      var name = document.getElementById("name").value;
      var coffee = document.getElementById("coffee").value;
      if (name === "" || coffee === "") {
        alert("Please fill in all required fields.");
        return false;
      }
      <form onsubmit="return submitOrder(event)">
      return true;
    }