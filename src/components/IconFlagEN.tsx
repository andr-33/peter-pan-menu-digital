import { Box } from "@mui/material";


export default function IconFlagEN() {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <img src="/flag_en.png" alt="Flag EN" style={{ width: '25px', height: '25px' }} />
        </Box>
    );
}