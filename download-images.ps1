$urls = @(
  "https://jpcabletray.com/wp-content/uploads/2025/07/logo-1.png",
  "https://jpcabletray.com/wp-content/uploads/2025/09/banner2-min-scaled.jpg",
  "https://jpcabletray.com/wp-content/uploads/2025/07/ct1-scaled-e1752984070653.jpg",
  "https://jpcabletray.com/wp-content/uploads/2025/07/ct3-scaled.jpg",
  "https://jpcabletray.com/wp-content/uploads/2025/07/ww1.jpg",
  "https://jpcabletray.com/wp-content/uploads/2025/07/rw1-scaled.jpg",
  "https://jpcabletray.com/wp-content/uploads/2025/07/rw2-scaled.jpg",
  "https://jpcabletray.com/wp-content/uploads/2025/07/lct2-scaled-e1752986929771.jpg",
  "https://jpcabletray.com/wp-content/uploads/2025/07/lct1-scaled-e1752986827900.jpg",
  "https://jpcabletray.com/wp-content/uploads/2025/07/logo-footer.png",
  "https://jpcabletray.com/wp-content/uploads/2025/07/flat-design-illustration-customer-support-768x768.png",
  "https://jpcabletray.com/wp-content/uploads/2025/07/testimonial-e1753019911592.jpg"
)

$destDir = "e:\jp Cable tray\public"
if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir }
if (-not (Test-Path "$destDir\products")) { New-Item -ItemType Directory -Force -Path "$destDir\products" }
if (-not (Test-Path "$destDir\gallery")) { New-Item -ItemType Directory -Force -Path "$destDir\gallery" }

Invoke-WebRequest -Uri $urls[0] -OutFile "$destDir\logo.png"
Invoke-WebRequest -Uri $urls[1] -OutFile "$destDir\hero-banner.jpg"
Invoke-WebRequest -Uri $urls[2] -OutFile "$destDir\products\perforated.jpg"
Invoke-WebRequest -Uri $urls[3] -OutFile "$destDir\about-us.jpg"
Invoke-WebRequest -Uri $urls[4] -OutFile "$destDir\products\walkway.jpg"
Invoke-WebRequest -Uri $urls[5] -OutFile "$destDir\products\raceway.jpg"
Invoke-WebRequest -Uri $urls[6] -OutFile "$destDir\gallery\1.jpg"
Invoke-WebRequest -Uri $urls[7] -OutFile "$destDir\products\ladder.jpg"
Invoke-WebRequest -Uri $urls[8] -OutFile "$destDir\gallery\2.jpg"
Invoke-WebRequest -Uri $urls[9] -OutFile "$destDir\logo-footer.png"
Invoke-WebRequest -Uri $urls[10] -OutFile "$destDir\contact-illustration.png"
Invoke-WebRequest -Uri $urls[11] -OutFile "$destDir\testimonial.jpg"

Write-Host "Images downloaded successfully."
