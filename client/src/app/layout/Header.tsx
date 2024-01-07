import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode : boolean;
    handlerThemeChange : () => void;
}

export default function Header({darkMode,handlerThemeChange}:Props){
    return (
        <AppBar position="static" sx={{mb:5}}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <Switch checked={darkMode} onChange={handlerThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}