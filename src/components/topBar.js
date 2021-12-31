import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dish from './randomDish';
import Favourites from './favourites';
import Backdrop from '@mui/material/Backdrop';
import AddCustomDish from './addCustomDish';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


function TopBar() {
    let displ = null;
    let mainButtons
    const [activeTab, setactiveTab] = useState('randomDish');
    const [open, setOpen] = useState(false);
    const closeAddCustomDish = () => {
        setOpen(!open);
    };
    const showAddCustomDish = () => {
        setOpen(!open);
    };

    if (activeTab === 'randomDish') {
        mainButtons = <div>
            <Stack direction="row" spacing={2}>
                <Button id='one' variant="outlined" onClick={() => setactiveTab('randomDish')} > Random dish </Button>
                <Button id='one' variant="outlined" onClick={() => setactiveTab('favourites')} > Favourites </Button>
            </Stack>
        </div>;
        displ = <Dish />;
    }
    if (activeTab === 'favourites') {
        mainButtons = <div>
            <Stack direction="row" spacing={2}>
                <Button id='one' variant="outlined" onClick={() => setactiveTab('randomDish')} > Random dish </Button>
                <Button id='one' variant="outlined" onClick={() => setactiveTab('favourites')} > Favourites </Button>
                <Button id='one' variant="outlined" onClick={showAddCustomDish} > Add custom dish </Button>
            </Stack>
        </div>;
        displ =
            <div>
                <Favourites />
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <div className='closeAddDish'>
                        <IconButton color="error">
                            <CloseIcon
                                fontSize="large"
                                onClick={closeAddCustomDish}
                            />
                        </IconButton>
                        <AddCustomDish />
                    </div>
                </Backdrop >;
            </div >
    }

    return (
        <div className='container'>
            <div className="topBar">
                {mainButtons}
            </div >
            <div>
                {displ}
            </div>
        </div>
    )
}


export default TopBar;