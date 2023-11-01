function Login() {
    function handleFormSubmit(event) {
        event.preventDefault()
        const userDate = {
            username: event.target.username.value,
            password: event.target.username.value,
        }
        console.log(userDate)
        alert(JSON.stringify(userDate))
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="">
                    Username:
                    <input type="text" name="username"/>
                </label>
                <label htmlFor="">
                    Password:
                    <input type="password" name="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;
