
window.app = new DropBoxController();


/*
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if
          request.time < timestamp.date(2022, 6, 12);
    }
  }
}

*/