import CancelIcon from "@mui/icons-material/CloseRounded";
import ConfirmIcon from "@mui/icons-material/CheckRounded";
import EditIcon from '@mui/icons-material/EditRounded';
import {Box, IconButton, InputAdornment, Skeleton, TextField} from "@mui/material";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {useParams} from "react-router-dom";

import {useGetMovieByIdQuery, useUpdateMovieMutation} from "api";

import style from './EditableTitle.styles'

export const EditableTitle = () => {
    const [editMode, setEditMode] = useState(false)
    const { movieId } = useParams();
    const {getMovieByIdQuery} = useGetMovieByIdQuery(parseInt(movieId || ""))
    const inputRef = useRef<HTMLInputElement>(null);
    const [title, setTitle] = useState("")
    const {updateMovieMutation} = useUpdateMovieMutation()

    useEffect(() => {
        const fetchedTitle = getMovieByIdQuery.data?.data.title;
            console.log(fetchedTitle);
            if (fetchedTitle) setTitle(fetchedTitle)
            else setTitle("hh")
        }
        , [getMovieByIdQuery.data, setTitle])

    const enableEditMode = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.blur();
        }
        setEditMode(true)
    }, [editMode]);

    const disableEditMode = useCallback(() => {
        if (inputRef.current) {
            inputRef.current.blur();
        }
        setEditMode(false)
    }, [editMode]);

    const inputAdornment = useMemo(() => {
        if (editMode) return (
            <>
                <InputAdornment position="end">
                    <IconButton onClick={() => {
                        if (inputRef.current) {
                            setTitle(getMovieByIdQuery.data?.data.title as string)
                        }
                        disableEditMode()
                    }}>
                        <CancelIcon/>
                    </IconButton>
                </InputAdornment>
                <InputAdornment position="end">
                    <IconButton onClick={async () => {
                        await updateMovieMutation.mutateAsync(
                            {id: parseInt(movieId || ""), title },
                            {
                                onSuccess: (rs) => console.log(rs)
                            }
                            ).finally(() => disableEditMode())
                    }}>
                        <ConfirmIcon/>
                    </IconButton>
                </InputAdornment>
            </>
        )
        else return (
            <InputAdornment position="end">
                <IconButton onClick={() => enableEditMode()}>
                    <EditIcon/>
                </IconButton>
            </InputAdornment>
        )

    }, [editMode, title, getMovieByIdQuery]);

    if (getMovieByIdQuery.isLoading) return <Skeleton sx={style.skeleton}/>

    return (
        <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
            <TextField
                variant='standard'
                inputRef={inputRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={style.title} onFocus={() => setEditMode(true)} onBlur={() => setEditMode(false)}
                slotProps={{
                    input: {
                        endAdornment: inputAdornment
                    },
                }}
            />
        </Box>
    )
}
