import React from'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const MyInputTypeCheckBox = ({multilanguage, label, sx = {},allprops, defaultChecked=false, onChange,name=""}) => {
    // const { t } = useTranslation();
    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // const { register } = useFormContext();
    // const [checkedVal, setCheckedVal] = useState(props.config.checkeddefaultval);
    // const dispatch = useDispatch();
    // const handleOnClick = (e) => {
    //     if (e.target.checked == true) {
    //         setCheckedVal(true);
    //     }
    //     else {
    //         setCheckedVal(false);
    //     }

    // }

    // useEffect(() => {
    //     dispatch({ type: props.config.dispatchername, payload: checkedVal })
    // }, [checkedVal, dispatch, props.config.dispatchername]);

    // return (
    //     <Box sx={{
    //         m : 1,
    //         display: 'flex',
    //         alignItems: 'center',

    //     }}>

    //         <FormGroup>
    //          <FormControlLabel control={<Checkbox defaultChecked={props.config.checkeddefaultval} />}
    //                 label={t(props.config.label)}
    //                 onChange={handleOnClick}
    //                 {...register(props.config.dispatchername, { onChange: (e) => handleOnClick(e) })} />
    //         </FormGroup>

    //     </Box>

    // );

    return(
 
               <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked={defaultChecked} />}
                   label={multilanguage(label)}
                     onChange={onchange}
                     name={name}
                     {...allprops }/>
         </FormGroup>

    )
};
export default MyInputTypeCheckBox;