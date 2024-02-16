import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';
import * as PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

function IconSwitch({icon, onSwitch}) {
    
   
        if(icon == "view_list"){
           return(
                <Button className='text-black' variant="link" onClick={onSwitch}>
                    <ViewListIcon/>
                </Button>           
            )
        }else{
            return(
                <Button className='text-black' variant="link" onClick={onSwitch}>
                    <ViewModuleIcon/>
                </Button>          
            )
        }
    
        
    
}

IconSwitch.propTypes={
    icon: PropTypes.string,
    onSwitch: PropTypes.func
}

export default IconSwitch