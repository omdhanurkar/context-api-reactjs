import React, { useContext, useState } from "react";
import { CrudContext } from "../Context/CrudContext";
import {
    Container,
    Button,
    Typography,
    Grid,
    CardContent,
    Card,
    Paper,
    TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const AddPage = () => {
    const { addUser } = useContext(CrudContext);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: Date.now().toString(),
            name,
        };
        addUser(newUser);
        navigate("/");
    };

    const onChange = (e) => {
        setName(e.target.value);
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
                                    <Typography variant="h4">Add User</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <form
                                        onSubmit={onSubmit}
                                        style={{ maxWidth: "400px", margin: "0 auto" }}
                                    >
                                        <TextField
                                            fullWidth
                                            variant="outlined"
                                            value={name}
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

export default AddPage;
