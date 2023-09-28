import React, { useContext } from "react";
import { CrudContext } from "../Context/CrudContext";
import {
    Container,
    Button,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Grid,
    CardContent,
    Card,
    Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ListPage = () => {
    const { getUsers, deleteUser } = useContext(CrudContext);

    const items = getUsers();
    const handleDelete = (id) => {
        deleteUser(id);
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
                                    <Typography variant="h4">List of Items</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Link to="/add" style={{ textDecoration: "none" }}>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                color: "#ffffff",
                                                backgroundColor: "#2DCE89 !important",
                                            }}
                                        >
                                            Add User
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={12}>
                                    <List>
                                        {items.length > 0 ? (
                                            items.map((item) => (
                                                <ListItem key={item.id}>
                                                    <ListItemText primary={item.name} />
                                                    <ListItemSecondaryAction>
                                                        <Link
                                                            to={`/edit/${item.id}`}
                                                            style={{ color: "warning" }}
                                                        >
                                                            <IconButton color="warning">
                                                                <EditIcon />
                                                            </IconButton>
                                                        </Link>
                                                        <IconButton
                                                            edge="end"
                                                            aria-label="delete"
                                                            onClick={() => handleDelete(item.id)}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </ListItemSecondaryAction>
                                                </ListItem>
                                            ))
                                        ) : (
                                            <Typography variant="h4" align="center">
                                                No Users
                                            </Typography>
                                        )}
                                    </List>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Paper>
            </Container>
        </div>
    );
};

export default ListPage;
