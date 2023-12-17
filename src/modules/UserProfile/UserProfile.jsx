import { Box, Button, Container, Grid, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import { getPostByUserId } from '../../store/Post/slice';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/paths'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export const UserProfile = () => {
    const [currentUser, setCurrentUser] = useState(() => {
        return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
    })
    const navigate = useNavigate()
    const { listPostByUserId } = useSelector((state) => state.post)
    console.log('listPostByUserId: ', listPostByUserId)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostByUserId(currentUser.id))
    }, [])
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <Container sx={{ marginTop: '3rem', height: '1000px' }}>
            <Box>
                <Stack direction={'column'}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img className='' width={200} src="https://cliply.co/wp-content/uploads/2020/09/442008571_ARTIST_AVATAR_3D_400.png" alt="" />

                    </Box>
                    <Typography fontSize={'2rem'} sx={{ textAlign: 'center' }}>{currentUser?.name}</Typography>
                    <Box sx={{}} >
                        <Stack spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Button variant='contained' className='btn' >Chia sẻ</Button>
                            <Button variant='contained' className='btn'
                                onClick={() => { navigate(`/${PATH.EDIT_PROFILE}?username=${currentUser?.name}`) }}
                            >Chỉnh sửa hồ sơ</Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>

            {/* Những bài đăng va chia se của người dùng đang đăng nhập */}
            <Box sx={{ width: '100%' }} marginTop={'2rem'}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Bài viết của bạn" {...a11yProps(0)} id='tab' />
                        <Tab label="Đã chia sẻ" {...a11yProps(1)} id='tab' />
                        {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Grid container className="listGetPostById" gap={2} sx={{}} >
                        {listPostByUserId?.map((post) => {
                            return (
                                <Grid item xs key={post.id} bgcolor={''} borderRadius={'10px'} >
                                    <img style={{ borderRadius: '10px' }} src={`/images/` + post.filename} width={400} className='' alt="" />
                                    <Typography bgcolor={''} fontSize={'1rem'}>{post.title}</Typography>

                                </Grid>

                            )
                        })
                        }
                    </Grid>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    da chia se
                </CustomTabPanel>

            </Box>



        </Container>

    )
}
