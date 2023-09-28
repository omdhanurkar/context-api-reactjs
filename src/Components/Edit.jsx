import React, { useContext, useEffect, useState } from "react";
import { CrudContext } from "../Context/CrudContext";
import {
    TextField,
    Button,
    Typography,
    Container,
    CardContent,
    Paper,
    Card,
    Grid,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const { updateUser, getUsers } = useContext(CrudContext);
    const items = getUsers();
    const { id } = useParams();
    const navigate = useNavigate();

    // Initialize selectedUser with an empty object
    const [selectedUser, setSelectedUser] = useState({
        id: "",
        name: "",
    });

    useEffect(() => {
        const selectedUser = items.find((item) => item.id === id);

        if (selectedUser) {
            setSelectedUser(selectedUser);
        } else {
            // Handle the case where the user with the specified ID is not found
            // For example, display an alert
            alert(`User with ID ${id} not found.`);
            // You can also redirect the user to another page if needed
            // navigate("/not-found");
        }
    }, [id, items]);

    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        updateUser(selectedUser);
        navigate("/");
    };

    return (
        <div style={{ backgroundColor: "#F8F9FE", height: "100vh" }}>
            <Container
                sx={{
                    padding: {
                        xs: "50px 10px 50px 10px",
                        md: "50px 320px 50px 320px",
                        sm: "50px 100px 50px 100px",
                    },
                }}
            >
                <Paper
                    sx={{
                        p: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Card sx={{ boxShadow: 0, border: 0 }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4">Edit Name</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <form
                                        onSubmit={onSubmit}
                                        style={{ maxWidth: "400px", margin: "0 auto" }}
                                    >
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            value={selectedUser.name}
                                            size="small"
                                            onChange={onChange}
                                            name="name"
                                            placeholder="Enter user's name"
                                            required
                                            style={{ marginBottom: "1rem" }}
                                        />
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{ color: "#ffffff", backgroundColor: "#2DCE89 !important" }}
                                            >
                                                Submit
                                            </Button>
                                            <Link component={Link} to="/" variant="button">
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    sx={{
                                                        color: "#ffffff",
                                                        backgroundColor: "#e53935 !important",
                                                    }}
                                                >
                                                    Cancel
                                                </Button>
                                            </Link>
                                        </div>
                                    </form>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </Container>
        </div>
    );
};

export default Edit;
