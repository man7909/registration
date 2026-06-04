function registerUser(name, email, age) {
    const user = {
        name: name,
        email: email,
        age: age
    };

    return user;
}

module.exports = registerUser;