import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#98fb98',
      alignItems: 'center',
      justifyContent: 'center',
    },
    //LOGIN
    containerlogin: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 16,
      },
      formContainerlogin: {
        width: '100%',
        maxWidth: 400,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
      },
      headerlogin: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007bff',
        textAlign: 'center',
        marginBottom: 20,
      },
      input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
        fontSize: 16,
      },
      button: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 8,
        marginBottom: 12,
      },
      buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      linkText: {
        textAlign: 'center',
      },
      link: {
        color: '#007bff',
        fontWeight: 'bold',
      },
      loginbutton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginLeft: -100, // Move button left
      },
      //SIGNUP
      card: {
        width: '80%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
      },
      button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      signupText: {
        marginTop: 15,
        textAlign: 'center',
      },
      signupLink: {
        color: '#007bff',
        fontWeight: 'bold',
      },
      error: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
      },
      //Home

  containe: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeheading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  leftTextContainer: {
    width: '80%',
    alignSelf: 'flex-start',
    marginLeft: 20, // Adjust if needed
  },
  leftText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    marginBottom: 20,
  },
  loginbutton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginLeft: -100, // Move button left
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //USERHOME
  containerUserHome: {
    flex: 1,
  },
  backgroundImageUserHome: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    fontSize: 150,
    fontWeight: 'bold',
    color: '#fff',
  },
  classcraftText: {
    fontSize: 150,
    fontWeight: 'bold',
    color: '#fff',
  },
 

  //CLASSLIST
    containerclasslist: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f8f8f8',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    row: {
      flex: 1,
      justifyContent: 'space-between', // Ensures items are spaced properly
      marginBottom: 10, // Adds spacing between rows
    },
    card: {
      flex: 1,
      backgroundColor: '#FFC0CB',
      padding: 15,
      marginHorizontal: 5, // Space between columns
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 3, // Shadow for Android
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    editButton: {
      backgroundColor: '#4CAF50',
      padding: 8,
      marginRight: 5,
      borderRadius: 5,
    },
    deleteButton: {
      backgroundColor: '#E53935',
      padding: 8,
      borderRadius: 5,
    },
  //UPLOADMARKBUTTON
  buttonTextaa: {
    color: 'yellow', // ✅ Yellow text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  submitButtonaa: {
    backgroundColor: 'lightblue', // ✅ Light blue background
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  containerclasslist: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000', // ✅ Box shadow for class card
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // ✅ Android shadow
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  classSection: {
    fontSize: 16,
    marginBottom: 5,
  },
  classTopic: {
    fontSize: 16,
    marginBottom: 5,
  },
  classDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  assignmentDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  uploadButton: {
    width: 300, // ✅ Set width to 300px
    backgroundColor: '#ADD8E6', // ✅ Light blue background
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center', // ✅ Center the button
  },
  editButton: {
    flex: 1,
    backgroundColor: 'orange',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 5,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: 'red',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  });
  export default styles;