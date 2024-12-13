const data = {
    email: "abc@gmail.com",
    password: "abc@gmail.com"
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email !== data.email || password !== data.password) {
            return res.status(401).send({ error: "Please check your password or email again." });
        }

        // console.log("Email:", email, "Password:", password);

        return res.status(200).send({ message: "Login success", email });
    } catch (error) {
        // console.error("Error during login:", error);
        return res.status(500).send({ message: "Something went wrong..." });
    }
};
