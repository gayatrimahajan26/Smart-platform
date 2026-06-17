<button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }}
>
  Logout
</button>