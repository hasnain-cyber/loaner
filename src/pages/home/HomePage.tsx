import { Box, Typography, useMediaQuery } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { colors } from "../../theme";
import FeatureCard from "./components/FeatureCard";
import "./HomePage.scss";

const HomePage = () => {
    const isDesktop = useMediaQuery("(min-width:600px)");

    return (
        <>
            <Navbar />

            {/* hero section */}
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                flexDirection={isDesktop ? "row" : "column-reverse"}
                paddingY={"100px"}
                paddingX={"20px"}
                margin={2}
                borderRadius={4}
                bgcolor={colors.lightBlue}
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    padding={"20px"}
                // alignItems={'center'}
                >
                    <Typography
                        variant={isDesktop ? "h2" : "h3"}
                        textAlign={isDesktop ? "start" : "center"}
                        padding={"20px"}
                        color="white"
                        // fontFamily={"Calibri"}
                        fontWeight={'600'}
                    >
                        Loans are not
                        <br />
                        just about money,
                        <br />
                        and we understand that.
                    </Typography>
                </Box>
                <img
                    src="assets\hero.svg"
                    alt="person doing a transaction"
                    height={isDesktop ? '500px' : '250px'}
                />
            </Box>

            {/* features */}
            <Box
                display={"flex"}
                flexDirection={"column"}
                borderRadius={4}
                padding={10}
                margin={2}
                bgcolor={colors.lightBlue}
            >
                <Typography
                    variant={isDesktop ? "h2" : "h3"}
                    textAlign={isDesktop ? "right" : "center"}
                    color="white"
                    fontWeight={"600"}
                // sx={{ textDecoration: "underline" }}
                >
                    Why Choose Us?
                </Typography>
                <Box display={"flex"} flexDirection={isDesktop ? "row" : "column"} paddingY={"10px"}>
                    <FeatureCard
                        title={"SECURITY"}
                        imagePath={"assets/security.svg"}
                        description={
                            "Get the most secure way to lend or borrow money. No tension of fraud or theft."
                        }
                    />
                    <FeatureCard
                        title={"OPTIONS"}
                        imagePath={"assets/options.svg"}
                        description={
                            "We provide you with a number of options. Choose the best and most covenient for you."
                        }
                    />
                    <FeatureCard
                        title={"NO PAPERWORK"}
                        imagePath={"assets/no_paperwork.svg"}
                        description={
                            "Easy Paperless Documentation and Transactions, No Need to Roam around with Bundles of Paperwork."
                        }
                    />
                </Box>
            </Box>
        </>
    );
};

export default HomePage;
