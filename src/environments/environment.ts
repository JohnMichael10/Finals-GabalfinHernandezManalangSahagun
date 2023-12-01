// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost/recipal/',
  foodApiUrl: 'https://api.edamam.com/api/food-database/v2/parser',
  foodApiID: 'eb58a7fd',
  foodApiKey: '8e9f4db9641d5b48199d5900d063094a',

  firebaseConfig : {
    apiKey: "AIzaSyBe3fFjrUvpe1YEqX7HMXyT4nPfu6bsWu8",
    authDomain: "recipal-d4ded.firebaseapp.com",
    projectId: "recipal-d4ded",
    storageBucket: "recipal-d4ded.appspot.com",
    messagingSenderId: "174785880990",
    appId: "1:174785880990:web:39f5749dc4b22e73436c8f",
    measurementId: "G-BLX6TSJ3E7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
