import React, {ReactNode, useEffect, useMemo, useState} from 'react';
import { Outlet } from 'react-router-dom';
import {AppBar, Box, Button, Drawer, Stack, Skeleton, Toolbar, Typography} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logo from './logo.svg';

import style from './page-wrapper.styles'
import {useGetMoviesThumbnailListQuery} from "api/queries/movies/getMoviesThumbnailList.query";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../api/constants/routes.constats";

export function PageWrapper() {
    const [showDrawer, setShowDrawer] = useState(false)

    const navigate = useNavigate()
    const {moviesThumbnailList, getMoviesThumbnailList, loading} = useGetMoviesThumbnailListQuery()

    useEffect(() => getMoviesThumbnailList(), [])

    const drawerContent = useMemo(() => {
        if (loading || !moviesThumbnailList.length) return [1, 2, 3, 4, 5].map(item => (
            <Box key={item} sx={style.drawer.item.container}>
                <Skeleton sx={style.skeleton.cover}/>
                <Skeleton sx={style.skeleton.label}/>
            </Box>
        ))
        else return moviesThumbnailList.map(({title, year, thumb, id}) => (
            <Box key={title} sx={style.drawer.item.container} onClick={() => navigate(routes.movie(id.toString()))}>
                <Box component='img' src={thumb} sx={style.drawer.item.cover}/>
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
                    <Outlet/>
                </Box>
            </Stack>
        </>
    );
}
