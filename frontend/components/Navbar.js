<button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
    <Link href="/dashboard">Dashboard</Link>
  }}
>
  Logout
</button>