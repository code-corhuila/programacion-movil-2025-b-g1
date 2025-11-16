package com.angel.nazoru;

import android.os.Bundle;
import android.graphics.Color;
import com.getcapacitor.BridgeActivity;
import com.ahm.capacitor.camera.preview.CameraPreview;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Registrar plugin de CameraPreview
    registerPlugin(CameraPreview.class);

    // Hacer el WebView transparente para que se vea la cámara que está detrás
    try {
      // Transparent background for the WebView
      getBridge().getWebView().setBackgroundColor(android.graphics.Color.TRANSPARENT);
      // Ensure the window background is transparent as well
      getWindow().setBackgroundDrawableResource(android.R.color.transparent);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
