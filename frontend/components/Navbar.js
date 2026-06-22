<button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/login";
    <Link href="/dashboard">Dashboard</Link>
     <Link href="/admin">Admin</Link>
  }}
>
  Logout
</button>