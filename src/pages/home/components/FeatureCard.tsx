import { Box, Typography } from "@mui/material"

type propsType = {
    title: string,
    imagePath: string,
    description: string,
}

const FeatureCard = (props: propsType) => {
    return (
        <Box display={'flex'} flexDirection={'column'} >
            <Typography>{props.title}</Typography>
            <img src={props.imagePath} alt={props.title} />
            <Typography variant={'body1'}>{props.description}</Typography>
        </Box>
    )
}

export default FeatureCard