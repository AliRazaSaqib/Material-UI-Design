/** @format */

import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ProductList from "../Products/ProductList";
import "../../components/item.css";
import Shirt from "../../components/Products/catagories/Shirt";
import Pant from "../../components/Products/catagories/Pant";
import Trowser from "../../components/Products/catagories/Trowser";
import Jackets from "../../components/Products/catagories/Jackets";
import { Link } from "react-router-dom";
import Loader from "../spinner/Loader";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ViewCart from "../Products/ViewCart";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const SideMenu = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [spin, setSpin] = useState(true);
  const [active, setActive] = useState("component1");
  const itemsCount = useSelector((state) => state.cartItems);

  // count total no of items in redux
  const counter = itemsCount.newCart.length;

  // for side bar drawerToogle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // for side bar product filter

  const allProducts = (e) => {
    e.preventDefault();
    setActive("component1");
  };

  const shirts = (e) => {
    e.preventDefault();
    setActive("component2");
  };

  const pants = (e) => {
    e.preventDefault();
    setActive("component3");
  };

  const trowsers = (e) => {
    e.preventDefault();
    setActive("component4");
  };

  const jackets = (e) => {
    e.preventDefault();
    setActive("component5");
  };

  const showCart = (e) => {
    e.preventDefault();
    setActive("cartComponent");
  };

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 2000);
  }, []);

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemText onClick={allProducts}>All</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText onClick={shirts}>Shirts</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText onClick={pants}>Pants</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText onClick={trowsers}>Trowsers</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText onClick={jackets}>Jackets</ListItemText>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            E-Commerce Store
          </Typography>
          <div className="nav-cart">
            <Typography className="cart-counter">{counter}</Typography>
            <span>
              <ShoppingCartIcon onClick={showCart} />
            </span>
            <Link to="/" className="logout">
              Logout
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {spin ? (
          <Loader />
        ) : (
          <div>
            {active === "component1" && <ProductList title="allproducts" />}
            {active === "component2" && <Shirt title="shirts" />}
            {active === "component3" && <Pant title="pants" />}
            {active === "component4" && <Trowser title="trowsers" />}
            {active === "component5" && <Jackets title="jackets" />}
            {active === "cartComponent" && <ViewCart title="cart" />}
          </div>
        )}
      </main>
    </div>
  );
};

export default SideMenu;
