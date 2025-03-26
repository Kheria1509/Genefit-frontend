import React from "react";
import { Box, Card, CardContent, Typography, Grid, Divider } from "@mui/material";
import logo from "../assets/Logo.png";

const HealthNutritionInfo = (props) => {
    const { name, res1, res2 } = props;
    console.log("res1", res1);
    console.log("res2", res2);

    //split res1 by "\n"
    const firstout=res1.response.split("\n");

    // Default values for res1 and res2 if not provided
    const defaultRes1 = {
        Health: "N/A",
        RecommendedCaloriesIntake: "N/A",
        RecommendedProteinIntake: "N/A",
        OtherMacronutrients: {
            Carbs: "N/A",
            Fats: "N/A",
            Fibre: "N/A",
        },
        DiagnosedDisease: "N/A",
        LifestyleRecommendations: "N/A",
    };

    const defaultRes2 = [
        { ClinicalSignificancePrediction: 'N/A', DiseasePrediction: 'N/A' },
    ];

    // Use default values if res1 or res2 are not provided
    const healthData = res1 ? {
        Health: res1.Health || defaultRes1.Health,
        RecommendedCaloriesIntake: res1.RecommendedCaloriesIntake || defaultRes1.RecommendedCaloriesIntake,
        RecommendedProteinIntake: res1.RecommendedProteinIntake || defaultRes1.RecommendedProteinIntake,
        OtherMacronutrients: res1.OtherMacronutrients || defaultRes1.OtherMacronutrients,
        DiagnosedDisease: res1.DiagnosedDisease || defaultRes1.DiagnosedDisease,
        LifestyleRecommendations: res1.LifestyleRecommendations || defaultRes1.LifestyleRecommendations,
    } : defaultRes1;

    const clinicalData = res2 && Array.isArray(res2) && res2.length > 0 ? res2 : defaultRes2;

    return (
        <>
            <Box sx={{ padding: "40px", backgroundColor: "#040f1b", minHeight: "100vh" }}>
                {/* Logo */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "30px",
                        left: "20px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: "200px", height: "auto" }}
                    />
                </Box>

                {/* Report Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginTop: "10px",
                        background: "linear-gradient(to right, #25add6, #06cbaa)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: "1.5rem",
                        width: "100%",
                        lineHeight: "1.5",
                        textAlign: "right",
                    }}
                >
                    {name ? `${name}'s Report` : "Report"}
                </Typography>

                {/* Health and Nutrition Section */}
                <Card
                    sx={{
                        marginBottom: "30px",
                        backgroundColor: "#1a2a33",
                        padding: "20px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        textAlign: "left",
                        width: "50%",
                        margin: "30px auto ",
                    }}
                >
                    <Typography variant="h4" gutterBottom sx={{ color: "#25add6", textAlign: "center" }}>
                        Health and Nutrition Information
                    </Typography>
                    <Divider sx={{ backgroundColor: "#25add6", marginBottom: "15px" }} />
                    <CardContent>
                        {firstout.map((line, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                sx={{ color: "#fff", marginBottom: "10px" }}
                            >
                                {line}
                            </Typography>
                        ))}
                    </CardContent>
                </Card>

                {/* Clinical Significance Section */}
                <Card
                    sx={{
                        backgroundColor: "#1a2a33",
                        padding: "20px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    <Typography variant="h4" gutterBottom sx={{ color: "#25add6" }}>
                        Clinical Significance and Disease Predictions
                    </Typography>
                    <Divider sx={{ backgroundColor: "#25add6", marginBottom: "15px" }} />
                    <CardContent>
                        <Grid container spacing={3}>
                            {res2.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#13212c",
                                            padding: "15px",
                                            borderRadius: "8px",
                                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            minHeight: "150px",
                                            textAlign: "left",
                                        }}
                                    >
                                        <Typography variant="body1" sx={{ color: "#fff", marginBottom: "10px" }}>
                                            <strong>Clinical Significance Prediction:</strong> {item.Clinical_Significance_Prediction  || 'N/A'}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: "#fff" }}>
                                            <strong>Disease Prediction:</strong> {item.Disease_Prediction || 'N/A'}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default HealthNutritionInfo;
