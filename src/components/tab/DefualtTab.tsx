import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import styled from '@emotion/styled';

interface DefaultTabProps {
  children: ReactNode; // children을 props로 추가
}

const StyledTab = styled(Tab)({
  color: '#000000',

  '&:after': {
    display: 'block',
    content: '""',
    position: 'absolute',
    right: '0px',
    width: '2px',
    height: '12px',
    backgroundColor: '#000000',
  },
  ':last-child::after': {
    content: 'none',
  },
  '&.Mui-selected': {
    color: '#F18A39',
  },
});
const DefaultTab: React.FC<DefaultTabProps> = ({ children }) => {
  const [value, setValue] = React.useState('all');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{
              style: {
                color: '#f18a39',
                backgroundColor: '#f18a39',
              },
            }}
          >
            <StyledTab label="ALL" value="all" />
            <StyledTab label="CAT FOOD" value="food" />
            <StyledTab label="ECT" value="ect" />
            <StyledTab label="PLANTS" value="plants" />
          </TabList>
        </Box>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child as React.ReactElement<any>, { selectedValue: value });
        })}
      </TabContext>
    </Box>
  );
};
export default DefaultTab;
