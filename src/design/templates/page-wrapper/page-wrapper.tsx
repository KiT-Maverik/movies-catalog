import React, {ReactNode, useMemo, useState} from 'react';
import {AppBar, Box, Button, Drawer, IconButton, Stack, Skeleton, Toolbar, Typography} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logo from './logo.svg';

import style from './page-wrapper.styles'

interface PageWrapperProps {
    children: ReactNode;
}

export function PageWrapper({children}: PageWrapperProps) {
    const [showDrawer, setShowDrawer] = useState(false)

    const drawerContent = useMemo(() => {
        return [1, 2, 3, 4, 5].map(item => (
            <Box key={item} sx={style.drawer.item.container}>
                <Skeleton sx={style.skeleton.cover}/>
                <Skeleton sx={style.skeleton.label}/>
            </Box>
        ))
    }, []);

    return (
        <>
            <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
                {drawerContent}
            </Drawer>
            <Stack sx={style.container}>
                    <AppBar position="static">
                        <Toolbar>
                            <Button color="inherit" startIcon={<MenuRoundedIcon />} onClick={() => setShowDrawer(true)}>Movie Catalog</Button>
                        </Toolbar>
                    </AppBar>
                <Box component='main' sx={style.main}>{children}</Box>
            </Stack>
        </>
    );
}
