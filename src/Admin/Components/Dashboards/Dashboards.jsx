import { TextFields } from '@mui/icons-material'
import { Container, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'

export const Dashboards = () => {
    return (
        <div className='bg '>
            <Container sx={{
                paddingTop: '5rem'
            }}>
                <TextField fullW idth id="outlined-basic" label="Tim kiem..." variant="outlined"
                    InputProps={{
                    }} />

                <Typography textAlign={'center'} fontSize={'5rem'}

                    sx={{
                        paddingTop: '100px',
                        color: '#404040'
                    }}
                    className='' >Quản trị</Typography>
            </Container>

        </div>
    )
}
