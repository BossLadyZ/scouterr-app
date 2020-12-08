<div>
<form>
  <input
    name="email"
    type="email"
    id="email"
    placeholder="enter email address"
    onChange={this.onInputChange}
    value={this.state.email}
  />

  <input
    name="password"
    type="password"
    id="password"
    placeholder="enter password"
    onChange={this.onInputChange}
    value={this.state.password}
  />
</form>

<button onClick={this.login}>Login</button>
<button onClick={this.signup}>Sign Up</button>
</div>
);