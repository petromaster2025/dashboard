// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/12.3.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/12.3.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCyotsoQE-mzNAKfSyNU-BtVM1giktqoGA",
  authDomain: "petro-master.firebaseapp.com",
  projectId: "petro-master",
  storageBucket: "petro-master.firebasestorage.app",
  messagingSenderId: "814581506317",
  appId: "1:814581506317:web:7ea83a9a05aa0707d61044",
});

const messaging = firebase.messaging();

// Background notifications
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  });
});
