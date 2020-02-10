# ReactNative_MovieApp
    - A React Native application for Movies.
    
### Table of Contents
1. [Functionality](#Functionality)
2. [Features](#Features)
4. [Installation](#installation)
5. [Setup of Android Emulator](#android-emulator)
6. [Setup in Android Phone](#android-phone)
7. [Setup of the project](#setup-project)

<a name="functionality"></a>
### App Functionality

- The app has Facebook login and sign in with email functionality.
- The app shows the list of movies.
- The app provides search functioality where the user can search the maovies with the name.

<a name="features"></a>
#### Home Screen - Features
1. Facebook Login button.
2. Sign in with email button.

#### SignIn Screen - Features
1. User name field.
2. Password field.
3. Sign In button.

#### Movie List Screen - Features
1. List of movies with Image, title and release date.
2. Search icon on Header.
3. Logout option.

#### Movie Details Screen - Features
1. Name of the movie.
2. Images of the movie.
3. Close icon on the header.

#### Search Screen - Features
1. Search Bar.
2. After search, the movie title and image is displayed in a list view

<a name="installation"></a>
### Installation and running the application.

<a name="android-emulator"></a>
#### Setup the android emulator.

1. Go to the link specified, go to react native CLI Quickstart and perform all the instructions till setting up ANDROID_HOME
   
   (https://facebook.github.io/react-native/docs/getting-started)
   
2. Install Android Studio, open the AVD Manager.
3. Select the type of phone.
4. Download the version of Android. 
5. Click Finish. It opens a window. Select the play button displayed.
6. The emulator will open.

<a name="android-phone"></a>
#### Setup in android phone

1. Connect mobile phone with USB cable.

2. Check the box to transfer files.

3. Go to Settings => Developer Options => Enable USB Debugging.

<a name="setup-project"></a>
#### Setup of the project
   
1. Clone the application by using the following command

     `git clone https://github.com/nirustanite/ReactNative_MovieApp.git `
     
2. cd to the folder /MovieApp.
    
    ` cd MovieApp `
    
3. Install dependencies using this command
  
     ` npm i `

4. Type the command to install the app

      ` react-native run-android `
      
5. Close the application in the emulator or phone.

6. Type the command to start the app

      ` react-native start `
      
9. When loading dependecy graph is done, open the app.
    
10. Now, the app can be used in the phone.
