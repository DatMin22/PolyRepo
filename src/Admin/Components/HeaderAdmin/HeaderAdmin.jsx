// import styled from '@emotion/styled';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MuiAppBar from '@mui/material/AppBar'
import { Avatar, Box, CssBaseline, Divider, Drawer, IconButton, Input, InputBase, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Stack, TextField, Toolbar, Tooltip, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItemButton from '@mui/material/ListItemButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
 import SearchIcon from '@mui/icons-material/Search';
import { PATH } from '../../../constants/paths'
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export const HeaderAdmin = () => {
    const { isLogin, userLogin, userIslogin } = useSelector(state => state.auth)

    console.log('userIslogin: ', userIslogin);
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const settings =
        [
            <Link Link to={PATH.HOME} style={{ color: '#000', textAlign: 'center' }}>
                {userIslogin?.name}
            </Link >,
            <Link Link to={PATH.DASHBOARD} style={{
                display: userIslogin?.roleId == 1 ? "block" : "none",
                color: '#000', textAlign: 'center'
            }}>
                Quản trị
            </Link >,
            <Link to={PATH.PROFILE} style={{ color: '#000', textAlign: 'center' }}>
                Tài khoản
            </Link>,
            <Link to={'/changePass'} style={{ color: '#000', textAlign: 'center' }}>
                Đổi mật khẩu
            </Link>,

            <Link
                onClick={() => {
                    localStorage.clear('currentUser')
                    dispatch(authActions.logout())
                    navigate(PATH.SIGNIN)
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
    const ariaLabel = { 'aria-label': 'description' };
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar position="fixed" open={open} sx={{ backgroundColor: '#1F2937' }}>
                    <Toolbar sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="end"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >

                            <MenuIcon />
                        </IconButton>
                        <Link to={'/'} variant="h6" noWrap component="div">
                            <img src="./images/logoPolyRepo.png" alt="" width={100} />

                        </Link>
                        <InputBase style={{ width: '200px' }}
                            sx={{ ml: 1, flex: 1, color: '#fff', }}
                            placeholder="Tìm kiếm..."
                            inputProps={{ 'aria-label': 'Tìm kiếm....' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <Stack direction="row" spacing={2}>
                            {/* <Typography align='center' component={'small'} lineheight={'72px'} sx={{verticalAlign:'middle'}}
                            >Xin chào {userIslogin?.name}</Typography> */}
                            <Box style={{
                                display: isLogin ? "block" : "none", padding: '1rem'
                            }} sx={{ flexGrow: 0 }} >
                                <Tooltip title="Open settings" >
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar

                                            alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                                        <MenuItem key={setting}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}

                                </Menu>
                            </Box>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {[
                            <Link to={PATH.DASHBOARD} style={{ color: '#522C33' }}>Trang chủ</Link>,
                            <Link to={PATH.USERS_MANAGEMENT} style={{ color: '#522C33' }}>Quản lý người dùng</Link>,
                            <Link to={PATH.POSTS_MANAGEMENT} style={{ color: '#522C33' }}>Quản lý bài viết</Link>,
                            <Link to={PATH.COMMENTS_MANAGEMENT} style={{ color: '#522C33' }}>Quản lý bình luận</Link>,
                            <Link to={PATH.LIKES_MANAGEMENT} style={{ color: '#522C33' }}>Quản lý lượt thích</Link>,
                            <Link to={PATH.SHARES_MANAGEMENT} style={{ color: '#522C33' }}>Quản lý chia sẻ</Link>,
                            <Link to={PATH.CATEGORIES_MANAGEMENT} style={{ color: '#522C33' }}>Quản lý ngành học</Link>,
                        ]
                            .map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                    </List>
                    <Divider />
                    {/* <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List> */}
                </Drawer>
                {/* <Main open={open}>
                    <DrawerHeader />
                    sdf
                </Main> */}
            </Box>


            {/*-------------------------------------  */}
            <nav className="d-none fixed top-0 z-50 w-full bg-gray-800 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                                </svg>
                            </button>
                            <Link to={'/'} className="flex ms-2 md:me-24">
                                <img src="./images/logoPolyRepo.png" className="h-8 me-3" alt="PolyRepo Logo" />
                            </Link>
                        </div>
                        <h1 className='text-white text-xl' >Admin Dashboard</h1>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>

                                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>

                                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </button>
                                    <span className='text-gray-400'>{userIslogin.name}</span>

                                </div>
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                                            Neil Sims
                                        </p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}
