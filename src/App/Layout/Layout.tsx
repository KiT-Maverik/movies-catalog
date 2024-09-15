import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    Skeleton,
    Toolbar,
    Typography,
    ListItemText,
    ListItemIcon, MenuItem, MenuList, TextField, Autocomplete
} from "@mui/material";
import React, {useMemo, useState} from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {useGetMoviesListQuery} from "api/queries/movies/useGetMoviesListQuery";

import {route} from "App";
import style from './Layout.styles'

export function Layout() {
    const [showDrawer, setShowDrawer] = useState(false)

    const navigate = useNavigate()
    const {getMoviesListQuery} = useGetMoviesListQuery()

    const drawerContent = useMemo(() => {
        if (getMoviesListQuery.isLoading) return [1, 2, 3, 4, 5].map(item => (
            <Box key={item} sx={style.drawer.item.container}>
                <Skeleton sx={style.skeleton.cover}/>
                <Skeleton sx={style.skeleton.label}/>
            </Box>
        ))

        else return (
            <MenuList>
                {
                    getMoviesListQuery.moviesList.map(({title, year, thumb, id}) => (
                        <MenuItem key={title} onClick={() => {
                            navigate(route.movie(id.toString()))
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
    }, [getMoviesListQuery]);

    return (
        <>
            <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
                {drawerContent}
            </Drawer>
                    <AppBar position="static">
                        <Toolbar>
                            <Button color="inherit" startIcon={<MenuRoundedIcon />} onClick={() => setShowDrawer(true)}>Movie Catalog</Button>
                            <Autocomplete
                                sx={{ width: 300 }}
                                options={getMoviesListQuery.moviesList}
                                autoHighlight
                                getOptionLabel={(option) => option.title}
                                renderOption={(props, option) => {
                                    const { key, ...optionProps } = props;
                                    return (
                                        <Box
                                            key={key}
                                            component="li"
                                            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                            {...optionProps}
                                        >
                                            <Box
                                                sx={{display: 'flex'}}
                                                onClick={() => {
                                                navigate(route.movie(option.id.toString()))
                                                setShowDrawer(false)
                                            }}>
                                                <ListItemIcon>
                                                    <Box component='img' src={option.cover} sx={style.drawer.item.cover}/>
                                                </ListItemIcon>
                                                <ListItemText>
                                                    <Typography color='text.secondary'>{`${option.title} (${option.year})`}</Typography>
                                                </ListItemText>
                                            </Box>
                                        </Box>
                                    );
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Choose a movie"
                                        slotProps={{
                                            htmlInput: {
                                                ...params.inputProps,
                                                autoComplete: 'new-password', // disable autocomplete and autofill
                                            },
                                        }}
                                    />
                                )}
                            />
                        </Toolbar>
                    </AppBar>
                <Box component='main' sx={style.main}>
                    <Outlet/>
                </Box>
        </>
    );
}
