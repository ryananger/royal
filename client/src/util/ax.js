import axios from 'axios';
import st    from 'ryscott-st';

var ax = {
  createUser: function(user) {
    axios.post(process.env.URL + 'api/users', user)
      .then(function(response) {
        console.log(response.data);

        st.setUser(response.data);
      })
  },
  getUser: function(uid) {
    axios.get(process.env.URL + 'api/users/' + uid)
      .then(function(response) {
        var user = response.data;

        st.setUser(user);
        document.cookie = `user=${uid}`;
      })
  },
  checkUsername: async function(username) {
    try {
      var response = await axios.get(process.env.URL + 'api/users/checkUsername/' + username);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  submitApplication: async function(application) {
    var request = {
      user_id: st.user._id,
      application: application
    };

    try {
      var response = await axios.post(process.env.URL + 'api/users/submitApplication/', request);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default ax;
