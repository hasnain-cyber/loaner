import { Box, Typography } from "@mui/material";

type propsType = {
    title: string;
    imagePath: string;
    description: string;
};

const FeatureCard = (props: propsType) => {
    return (
        <Box display={"flex"} flexDirection={"column"} paddingX={"20px"} paddingY={"50px"} justifyContent={"center"} alignItems={"center"}>
            <Typography textAlign={"center"} variant="h4" color={"white"} fontWeight={"400"}>{props.title}</Typography>
            <Box
                width="350px"
                height="350px"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <img src={props.imagePath} alt={props.title} width={"300px"} />
            </Box>
            <Typography
                variant={"body1"}
                textAlign="center"
                maxWidth={"250px"}
                fontFamily="cursive"
            >
                {props.description}
            </Typography>
        </Box>
    );
};

export default FeatureCard;
