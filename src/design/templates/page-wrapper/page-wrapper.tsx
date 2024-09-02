import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    Stack,
    Skeleton,
    Toolbar,
    Typography,
    ListItemText,
    ListItemIcon, MenuItem, MenuList
} from "@mui/material";
import React, {useEffect, useMemo, useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {useGetMoviesThumbnailListQuery} from "api/queries/movies/getMoviesThumbnailList.query";
import {routes} from "api/constants/routes.constats";
import style from './page-wrapper.styles'

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
        else return (
            <MenuList>
                {
                    moviesThumbnailList.map(({title, year, thumb, id}) => (
                        <MenuItem key={title} onClick={() => {
                            navigate(routes.movie(id.toString()))
                            setShowDrawer(false)
                        }}>
                            <ListItemIcon>
                                <Box component='img' src={thumb} sx={style.drawer.item.cover}/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography color='text.secondary'>{`${title} (${year})`}</Typography>
                            </ListItemText>
                        </MenuItem>
                    ))
                }
            </MenuList>
        )
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
