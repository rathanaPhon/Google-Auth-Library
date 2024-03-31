plugins {
    // To benefit from the latest Performance Monitoring plugin features,
    // update your Android Gradle plugin dependency to at least v3.4.0
    id("com.android.application") version "7.3.0" apply false

    // Make sure that you have the Google services Gradle plugin dependency
    id("com.google.gms.google-services") version "4.4.1" apply false

    // Add the dependency for the Performance Monitoring Gradle plugin
    id("com.google.firebase.firebase-perf") version "1.4.2" apply false
      }
