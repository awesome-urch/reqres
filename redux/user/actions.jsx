import instance from "..";
import * as actionTypes from "./types"

export const getUsers = (options) => {
    return (dispatch, getState) => {

      dispatch({
        type: actionTypes.IS_PROCESSING,
      });

      instance
        .get("/users",
        {
          params:{
            page: 1,
          }
        }
        )
        .then((response) => {

          console.log(response);

            dispatch({
                type: actionTypes.GET_USERS,
                data: response.data.data,
            });
        })
        .catch((error) => {
            console.log(error)

            dispatch({
                type: actionTypes.GET_USERS_ERROR,
                data: "Sorry a network error occurred",
            });

            
        });
    };
  };

  