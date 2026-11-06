Set-Location -Path $PSScriptRoot
$env:Path = "C:\Users\hp\AppData\Local\Programs\nodejs;" + $env:Path
npm run dev
