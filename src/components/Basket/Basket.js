import styled from "@emotion/styled";
import { Avatar, Box, ButtonBase, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Stack, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "../../store/store";

const Basket = () => {
    let total;
    let BasketCart=useSelector(store=>store.PSection.Products)
    let dispatch=useDispatch();
    return (
        <>
            <Typography
                color={"blue"}
                component={"h1"}
            >
                Shopping Basket
            </Typography>
            <Typography
                component={"p"}
            >
                You have {BasketCart.filter(itm=>itm.added).length} items in your basket
            </Typography>
            <Box sx={{ display: "flex" }}>
                <List sx={{ width: "80%" }}>
                    {
                        BasketCart.map((itm)=>{
                           return itm.added ? <ListItem key={itm.id} sx={{borderBottom:"1px solid gray"}}>
                                    <ListItemAvatar>
                                        <Avatar src={itm.imageUrl}/>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={itm.title}
                                        secondary={
                                            <>
                                                <Typography
                                                    component={"span"}
                                                    variant='subtitle1'
                                                >
                                                    &pound; {itm.price}
                                                </Typography>
                                                — {itm.description}
                                            </>
                                        }
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            onClick={()=>{
                                                dispatch(removeFromBasket({id:itm.id}))
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>     
                            :null
                        })
                    }
                    <ListItem sx={{display:"flex",justifyContent:"right"}} >
                        <Typography 
                        sx={{fontSize:"30px",fontWeight:"600"}}
                        >
                            £ {
                                BasketCart.filter(itm=>itm.added).reduce((a,b)=>{
                                    return a=a + b.price
                                },0)
                            }    
                        </Typography>
                    </ListItem>
                </List>
            </Box>
        </>
        // <Stack
        //     spacing={3}
        //     direction={"row"}
        //     sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}
        // >
        //     {images.map((image, indc) => (
        //         <ImageButton
        //             disableRipple
        //             key={image.title}
        //             style={{
        //                 width: image.width,
        //             }}
        //         >
        //             <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
        //             <ImageBackdrop className="MuiImageBackdrop-root" />
        //             <Image>
        //                 <Typography
        //                     component="span"
        //                     variant="subtitle1"
        //                     color="inherit"

        //                     sx={{
        //                         position: 'relative',
        //                         p: 4,
        //                         pt: 2,
        //                         pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
        //                     }}
        //                 >
        //                     {image.title}
        //                     <ImageMarked className="MuiImageMarked-root" />
        //                 </Typography>
        //             </Image>
        //         </ImageButton>
        //     ))}
        // </Stack>
    )
}
export default Basket;