import React, {ReactNode, useEffect, useMemo, useState} from 'react';
import {AppBar, Box, Button, Drawer, Stack, Skeleton, Toolbar, Typography} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logo from './logo.svg';

import style from './page-wrapper.styles'
import {useGetMoviesThumbnailListQuery} from "api/queries/movies/getMoviesThumbnailList.query";

interface PageWrapperProps {
    children: ReactNode;
}

export function PageWrapper({children}: PageWrapperProps) {
    const [showDrawer, setShowDrawer] = useState(false)

    const {moviesThumbnailList, getMoviesThumbnailList, loading} = useGetMoviesThumbnailListQuery()

    useEffect(() => getMoviesThumbnailList(), [])

    const drawerContent = useMemo(() => {
        if (loading || !moviesThumbnailList.length) return [1, 2, 3, 4, 5].map(item => (
            <Box key={item} sx={style.drawer.item.container}>
                <Skeleton sx={style.skeleton.cover}/>
                <Skeleton sx={style.skeleton.label}/>
            </Box>
        ))
        else return moviesThumbnailList.map(({title, year, cover, id}) => (
            <Box key={title} sx={style.drawer.item.container}>
                <Skeleton sx={style.drawer.item.cover}/>
                <Typography color='text.secondary'>{`${title} (${year})`}</Typography>
            </Box>
        ))
    }, [loading, moviesThumbnailList]);

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
                <Box component='main' sx={style.main}>
                        {children}
                </Box>
            </Stack>
        </>
    );
}
