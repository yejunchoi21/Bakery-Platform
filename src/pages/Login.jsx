import "./Login.css";

function Login() {
  return (
    
    <main className="login-page">
        <section className="login-card">

      <h1>Login</h1>
        
    {/* The form groups the username and password fields */}
      <form className="login-form"> 
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        
        <label htmlFor="password">Password</label>
        <input id="password" type="password"></input>
      <button type="submit">Log In</button>
      </form>
     </section>
    </main>
  );
}

export default Login;