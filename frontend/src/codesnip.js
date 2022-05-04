<form onSubmit={(event) => createUser(event)}>
  <input
    type="text"
    name="name"
    placeholder="Name"
    onChange={(event) => handle(event)}
    id="name"
    value={data.name}
  />
  <input
    type="text"
    name="username"
    placeholder="Username"
    onChange={(event) => handle(event)}
    id="username"
    value={data.username}
  />
  <input
    type="password"
    name="password"
    placeholder="Password"
    onChange={(event) => handle(event)}
    id="password"
    value={data.password}
  />
  <button className="bg-gray-500">Submit Form</button>
</form>;
