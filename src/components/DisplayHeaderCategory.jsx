import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CATEGORY_SELECTION } from "../state/actions/actionTypes";
import { useTranslation } from 'react-i18next'

const HeaderCategories = props => {
  const { t } = useTranslation("common")
  const handleItemClick = event => {
    props.dispatch({
      type: CATEGORY_SELECTION,
      payload: {
        categoryName: event.target.id,
        activeItem: event.target.active
      }
    });
  };

  return (
    <Menu
      id="article-category"
      pointing
      secondary
      style={{ backgroundColor: "white" }}
    >
      <Menu.Item
        name={t("nav.all")}
        id=""
        color="yellow"
        as={Link}
        to={{ pathname: "/" }}
        onClick={handleItemClick}
        active={props.activeItem === "all"}
      />
      <Menu.Item
        name={t("nav.latest-news")}
        id="latest-news"
        color="red"
        as={Link}
        to={{ pathname: "/latest_news" }}
        onClick={handleItemClick}
        active={props.activeItem === "latest_news"}
      />
      <Menu.Item
        name={t("nav.culture")}
        id="culture"
        color={"purple"}
        as={Link}
        to={{ pathname: "/culture" }}
        onClick={handleItemClick}
        active={props.activeItem === "culture"}
      />
      <Menu.Item
        name={t("nav.tech")}
        id="tech"
        color={"blue"}
        as={Link}
        to={{ pathname: "/tech" }}
        onClick={handleItemClick}
        active={props.activeItem === "tech"}
      />
      <Menu.Item
        name={t("nav.food")}
        id="food"
        color={"teal"}
        as={Link}
        to={{ pathname: "/food" }}
        onClick={handleItemClick}
        active={props.activeItem === "food"}
      />
      <Menu.Item
        name={t("nav.sports")}
        id="sports"
        color={"green"}
        as={Link}
        to={{ pathname: "/sports" }}
        onClick={handleItemClick}
        active={props.activeItem === "sports"}
      />
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    activeItem: state.activeItem
  };
};

export default connect(mapStateToProps)(HeaderCategories);
