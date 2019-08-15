import createStore from "unistore";

const initialState = {
  is_login: false,
  search: "",
  email: "ade@email.com",
  full_name: "ade suprapto laia putra",
  category: "",
  listNews: [],
  listMovie: [],
  user_data: {}
};

export const store = createStore(initialState);

export const actions = store => ({
  ubahSearch: (state, katabaru) => {
    store.setState({ search: katabaru });
  },

  ubahCategory: (state, categorybaru) => {
    store.setState({ category: categorybaru });
  },

  ubahListNews: (state, newsbaru) => {
    store.setState({ listNews: newsbaru });
  },

  ubah_user_data: (state, newsbaru) => {
    store.setState({ user_data: newsbaru });
  },

  ubahListMovie: (state, moviebaru) => {
    store.setState({ listMovie: moviebaru });
  },

  is_login_true: state => {
    store.setState({ is_login: true });
  },

  is_login_false: state => {
    store.setState({ is_login: false });
  }
});
