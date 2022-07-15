import React from "react";

const FavoritesContext = React.createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetup) => {},
    removeFavorite: (meetup) => {},
    itemIsFavorite: (meetup) => {},
});

export function FavoritesContextProvider({children}) {
    const [userFavorites, setUserFavorites] = React.useState([])

    function addFavoriteHandler(meetup) {
        // in case its updated concurrently sort of
        setUserFavorites((prevFavorites) =>
            [...prevFavorites, meetup])
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevFavorites) =>
            prevFavorites.filter((meetup) => meetup.id!==meetupId))
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    }

    return <FavoritesContext.Provider value={context}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContext