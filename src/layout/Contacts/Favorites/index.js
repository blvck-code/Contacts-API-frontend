import React, { useRef } from "react";
import { Icon, Placeholder } from "semantic-ui-react";
import ImageThumb from "../../../component/ImageThumb";
import "./style.css";

const Favorites = ({ favorites, loading }) => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -500,
        behavior: "smooth",
      });
    }
  };

  const showIcon = favorites.length > 2;

  return (
    <div>
      {loading && (
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
        </Placeholder>
      )}

      {favorites.length > 0 && (
        <div className="slide-container">
          {showIcon && (
            <Icon
              style={{ cursor: "pointer" }}
              name="caret left"
              size="huge"
              onClick={scrollLeft}
            />
          )}
          <div className="items-container" ref={listRef}>
            {Array.isArray(favorites) &&
              favorites.map((item) => (
                <div key={item.id} className="single-item">
                  <ImageThumb
                    firstName={item.first_name}
                    lastName={item.last_name}
                    src={item.contact_pic}
                    style={{ borderRadius: "50%" }}
                    style={{ width: 75, height: 75 }}
                  />
                  <p className="name">
                    {item.first_name}
                    {item.last_name}
                  </p>
                </div>
              ))}
          </div>
          {showIcon && (
            <Icon
              style={{ cursor: "pointer" }}
              name="caret right"
              size="huge"
              onClick={scrollRight}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
