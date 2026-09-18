import "./Login.css";

function Signup() {
  return (
    <main className="login-page">
      <section className="login-card">
        <h1>Sign Up</h1>

        <form className="login-form">
          <label htmlFor="signup-username">Username</label>
          <input id="signup-username" type="text" />

          <label htmlFor="signup-email">Email</label>
          <input id="signup-email" type="email" />

          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" />

          <button type="submit">Create Account</button>
        </form>
      </section>
    </main>
  );
}

export default Signup;