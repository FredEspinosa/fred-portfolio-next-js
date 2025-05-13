import { useState } from 'react';
import { FormGroup, styled } from '@mui/material';
import Switch, { SwitchProps } from '@mui/material/Switch';

type CustomizedSwitchesProps = {
  onToggle: (checked: boolean) => void;
};

const IOSSwitch = styled((props: SwitchProps & { checkedText?: string; uncheckedText?: string }) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 60,
  height: 30,
  padding: 0,
  position: 'relative',
  '& .MuiSwitch-switchBase': {
    padding: 1,
    margin: 2,
    marginTop: 0,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(30px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#ad9c7fab',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 26,
    height: 26,
    boxSizing: 'border-box',
    zIndex: 2,
  },
  '& .MuiSwitch-track': {
    borderRadius: 30 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    position: 'relative',
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 12,
      fontWeight: 'bold',
      color: '#000',
      zIndex: 1,
    },
    '&::before': {
      content: '"ES"',
      left: 8,
      color:'#fff',
      fontWeight: 'bold',
    },
    '&::after': {
      content: '"EN"',
      right: 8,
      color:'#ad9c7fab',
      fontWeight: 'bold',
    },
  },
}));

export default function CustomizedSwitches({ onToggle }: CustomizedSwitchesProps) {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onToggle(isChecked);
  };

  return (
    <FormGroup>
        <label className='label_switch'>                 
            {checked ? 'Lang' : 'Idioma'}
        </label>
        <IOSSwitch
            sx={{ m: 1 }}
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'language toggle' }}
        />
    </FormGroup>
  );
}
