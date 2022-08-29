import { Stack, Box } from "@mui/icons-material";

const Videos = ({ videos }) => {
	return (
		<Stack direction="row" flexWrap="wrap" justifyContent="start" gap="2">
			{videos.map((item, i) => (
				<Box key={i}>
                    
                </Box>
			))}
		</Stack>
	);
};

export default Videos;
