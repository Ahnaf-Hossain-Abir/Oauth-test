const developers = [
    {
        email: "dev2h@gmail.com",
        password: "123456",
    },
    {
        email: "dev3h@gmail.com",
        password: "123456",
    },
    {
        email: "dev4h@gmail.com",
        password: "123456",
    },
]

export const getDevelopers = email=>{
    const found = developers.find(dev=> dev.email === email);
    return found;
}