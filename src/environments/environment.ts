// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SAVE: "http://localhost:8090/login/Save",
  LOGUSER: "http://localhost:8090/login/getUserLogin",
  GETIMAGE: "http://localhost:8090/login/get/",
  GETALL: "http://localhost:8090/autherized/all",
  GETUSER: "http://localhost:8090/autherized/user",
  GETADMIN: "http://localhost:8090/autherized/admin"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
