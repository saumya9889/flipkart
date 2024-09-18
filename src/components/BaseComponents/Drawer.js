// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer'; 
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function CustomDrawer({open, onClose, cartData}) { 
// const [data,setData] = useState();
// useEffect (()=>{
//   const drawerData = localStorage.getItem("cartData");
//   setData(drawerData)

// },[])


//   const DrawerList = (
//     <Box sx={{ width: 250 }} role="presentation" >
//     <h2>Your Cart</h2>
//       <List>
//       </List>
//       <ListItem>No items in cart</ListItem>
//     </Box>
//   );
  
  
// return (
//   <>
//     <Drawer open={open} onClose={onClose} anchor='right'>
//       {DrawerList}
//     </Drawer>
//   </>
// );
// }



import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer'; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function CustomDrawer({ open, onClose, cartData = [] }) {  // Initialize cartData as an empty array
  const [data, setData] = useState([]);

  // Sync cartData with localStorage and state when cartData changes
  useEffect(() => {
    if (cartData && cartData.length > 0) {  // Check if cartData exists and has items
      localStorage.setItem("cartData", JSON.stringify(cartData));
      setData(cartData);  // Update state with the latest cartData
    } else {
      const drawerData = localStorage.getItem("cartData");
      if (drawerData) {
        setData(JSON.parse(drawerData));  // Load from localStorage if available
      }
    }
  }, [cartData]);

  // Drawer list to display cart items
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h2>Your Cart</h2>
      <List>
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
            </ListItem>
          ))
        ) : (
          <ListItem>No items in cart</ListItem>
        )}
      </List>
    </Box>
  );
  
  return (
    <>
      <Drawer open={open} onClose={onClose} anchor='right'>
        {DrawerList}
      </Drawer>
    </>
  );
}
