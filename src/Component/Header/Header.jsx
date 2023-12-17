import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'
import header from './Header.module.css'
import { useEffect, useState } from 'react'
import { authActions, getUserByEmail } from '../../store/Auth/slice'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Paper, Stack } from '@mui/material'
import { styled } from '@mui/material/styles';
import { PATH } from '../../constants/paths'
{/* <p className={`${style.subTitle} ${style['heading']}`}>Sub Title</p> */ }
export const Header = () => {
    const { isLogin, userLogin, userIslogin } = useSelector(state => state.auth)
    console.log('userIsLogin: ', userIslogin);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    console.log('isLogin: ', isLogin)
    const [currentUser, setCurrentUser] = useState(() => {
        return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

    })
    console.log('currentUser: ', currentUser)
    // chạy khi dữ liệu trong dependency thay đổi
    // if (isLogin == true) {
    //     if (userIslogin) {

    //     }
    // }
    if (currentUser !== null) {
        dispatch(authActions.setIsLogin(true))

        // setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
        console.log("currentUser", currentUser)
        // setCurrentUser(currentUser)
    }
    // if (isLogin == false && currentUser == null) {
    //     dispatch(authActions.setIsLogin())

    // }
    else if (isLogin == true && userIslogin) {
        localStorage.setItem('currentUser', JSON.stringify(userIslogin))
        setCurrentUser(userIslogin)
    }
    // const cuUser = JSON.parse(localStorage.getItem('currentUser'))
    useEffect(() => {
        // Hàm callback sẽ được thực thi sau khi component render lần đầu tiên, hoặc sau khi các giá trị phụ thuộc của nó thay đổi.
        // setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
    }, [currentUser])

    const pages = ['Products', 'Pricing', 'Blog'];
    const settings =
        [
            <Link to={'/'} style={{ color: '#000', textAlign: 'center' }}>
                {currentUser?.name}
            </Link >,
            <Link to={PATH.DASHBOARD} style={{
                display: currentUser?.roleId === 1 ? "block" : "none",
                color: '#000', textAlign: 'center'
            }}>
                Quản trị
            </Link >,
            <span
                // to={PATH.PROFILE}
                style={{ color: '#000', textAlign: 'center' }}
                onClick={() => {
                    navigate(`/${PATH.PROFILE}?username=${currentUser?.name}`);
                }}>
                Tài khoản
            </span>,
            <Link to={'/changePass'} style={{ color: '#000', textAlign: 'center' }}>
                Đổi mật khẩu
            </Link>,

            <Link
                to={PATH.SIGNIN}
                onClick={() => {
                    localStorage.clear('currentUser')
                    dispatch(authActions.logout())
                    // navigate(PATH.SIGNIN)
                }}
                style={{ color: '#000', textAlign: 'center' }}>
                Đăng xuất
            </Link>,
        ];
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>
            <AppBar position="fixed"
                sx={{
                    backgroundColor: '#1F2937'
                }}
                className=''
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            // href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                padding: '1rem'
                            }}
                        >
                            <Link to={'/'}>
                                <img src="./images/logoPolyRepo.png" width={100} alt="PolyRepo Logo" />
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            // href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                padding: '1rem'
                            }}
                        >

                            <Link to={'/'}>
                                <img src="./images/logoPolyRepo.png" className="" width={100} alt="PolyRepo Logo" />
                            </Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))} */}
                            <Stack direction="row" spacing={5}
                                style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', }}
                            >
                                <Link
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    to={'uploadPost'}
                                    style={{ display: isLogin ? "block" : "none" }}
                                >Tải lên</Link>
                                <Link
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    to={PATH.SIGNIN}
                                    style={{ display: isLogin ? "none" : "block" }}

                                >Đăng nhập</Link>
                                <Link
                                    sx={{
                                        cursor: 'pointer'
                                    }}
                                    to={'Sign-up'}
                                    style={{ display: isLogin ? "none" : "block", marginRight: '1rem' }}

                                >Đăng ký</Link>

                            </Stack>

                        </Box>

                        <Box style={{ display: isLogin ? "block" : "none", padding: '1rem' }} sx={{ flexGrow: 0 }} >
                            <Tooltip title="Open settings" >
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar

                                        alt="Remy Sharp" src="https://cliply.co/wp-content/uploads/2020/09/442008571_ARTIST_AVATAR_3D_400.png" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>


        </>
    )
}
