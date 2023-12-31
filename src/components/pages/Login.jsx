const Login = () => {
    return (
        <div className="card">
            <form className="input-group" action="">
                <input className="input-field" placeholder="USER NAME" type="username" required />
                <input className="input-field" placeholder="PASSWORD" type="password" required />
                <input type="button" className="input-field" value="Submit" />
            </form>
        </div>
    )
}

export default Login;