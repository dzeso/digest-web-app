// Load JavaScript from Google Drive
function loadJSFromGoogleDrive(id) {
  var rawJS = DriveApp.getFileById(id).getBlob().getDataAsString();
  eval(rawJS);
};

function doGet() {
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate()
      .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function includeFromGoogleDrive(id) {
  return "<script>" + DriveApp.getFileById(id).getBlob().getDataAsString() + "</script>";
}

function apiGetNews(param) {
  console.log('apiGetNews запустился');
  return ria.apiGetNews(param);
}

function apiGetRef(param) {
  console.log('apiGetRef запустился');
  return ria.apiGetRef(param);
}
function apiGetUserProfile() {
  console.log('apiGetUserProfile запустился');
  return ria.apiGetUserProfile();
}