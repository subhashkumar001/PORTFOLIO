@echo off
cd /d "%~dp0"
set "PATH=C:\Users\hp\AppData\Local\Programs\nodejs;%PATH%"
call npm run dev
pause
